import { NextResponse } from 'next/server'

const PORTAL_PASSWORD = '1010'

export async function POST(request) {
  const { password } = await request.json()

  if (password === PORTAL_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('ms_auth', 'authenticated', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: 'lax',
    })
    return response
  }

  return NextResponse.json({ success: false }, { status: 401 })
}
