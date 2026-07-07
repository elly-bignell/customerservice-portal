'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/onboarding')
      router.refresh()
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff7043] mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">Marketing Sweet</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">Team Portal</h1>
          <p className="mt-2 text-sm text-gray-500">Enter your access code to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-semibold text-[#1a1a1a] mb-2">
              Access code
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-[10px] border border-gray-200 px-4 py-3 text-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7043] focus:border-transparent"
              placeholder="Enter access code"
              required
            />
            {error && (
              <p className="mt-2 text-xs text-red-600">Incorrect access code. Please try again.</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[10px] bg-[#1a1a1a] py-3 text-sm font-semibold text-white hover:bg-[#333] transition-colors disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Access portal →'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">Marketing Sweet · Internal tools · Team access only</p>
      </div>
    </div>
  )
}
