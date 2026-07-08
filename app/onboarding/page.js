import Link from 'next/link'

export const metadata = {
  title: 'Client Onboarding & Audits — Marketing Sweet',
}

export default function OnboardingPage() {
  return (
    <div className="bg-white text-[#1a1a1a] antialiased min-h-screen">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#ff7043] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-extrabold tracking-tight">MS</span>
            </div>
            <span className="font-bold text-[15px] tracking-tight">Marketing Sweet</span>
          </div>
          <span className="flex items-center gap-2 rounded-[10px] bg-[#1a1a1a] px-3 py-2 text-xs font-semibold text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Team access only
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-20 pb-16 text-center px-6">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">Marketing Sweet Internal</p>
        <h1 className="mx-auto max-w-3xl text-[56px] font-extrabold leading-[1] tracking-[-0.04em] text-[#1a1a1a]">
          Client Onboarding<br />&amp; Audits
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-gray-500">
          Everything the team needs to onboard a new client from day one. Complete both audits during or after the onboarding meeting and export as PDF for your records.
        </p>
      </section>

      {/* AUDIT TILES */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.18em] text-gray-400">The Audits</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* HOSTING AUDIT TILE */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff7043]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="6" rx="1"/><rect x="2" y="9" width="20" height="6" rx="1"/><rect x="2" y="15" width="20" height="6" rx="1"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="18" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </div>

              <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#ff7043]">Hosting Audit</p>
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Admin access required
              </span>

              <p className="mb-6 text-[15px] leading-relaxed text-gray-600">
                Full backend health check completed at client onboarding. Covers server and software, security, plugins, themes, page builders, CMS capability and tracking access. Supports WordPress and other CMS platforms.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-xl font-extrabold tracking-tight text-[#1a1a1a]">36</p>
                  <p className="text-xs text-gray-500 mt-0.5">checks across 6 sections</p>
                </div>
                <div className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-xl font-extrabold tracking-tight text-[#1a1a1a]">3</p>
                  <p className="text-xs text-gray-500 mt-0.5">MS non-negotiable installs</p>
                </div>
              </div>

              <ul className="mb-8 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff7043] flex-shrink-0"></span>Server &amp; software</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff7043] flex-shrink-0"></span>Security &amp; backups</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff7043] flex-shrink-0"></span>Themes &amp; page builders</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff7043] flex-shrink-0"></span>Plugins</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff7043] flex-shrink-0"></span>Access &amp; CMS capability</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff7043] flex-shrink-0"></span>Tracking &amp; analytics access</li>
              </ul>

              <Link href="/onboarding/hosting-audit" className="mt-auto block w-full rounded-[10px] bg-[#1a1a1a] py-3.5 text-center text-sm font-semibold text-white hover:bg-[#333] transition-colors">
                Open Hosting Audit →
              </Link>
              <p className="mt-3 text-center text-xs text-gray-400">Exports to PDF for client records</p>
            </div>

            {/* WEBSITE AUDIT TILE */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>

              <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-green-600">Website Audit</p>
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                No login required
              </span>

              <p className="mb-6 text-[15px] leading-relaxed text-gray-600">
                Frontend health check completed at client onboarding. Covers SEO health, Core Web Vitals, conversion tracking, UX testing and visual quality. Completed from the browser — no backend access needed.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-xl font-extrabold tracking-tight text-[#1a1a1a]">21</p>
                  <p className="text-xs text-gray-500 mt-0.5">checks across 3 sections</p>
                </div>
                <div className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-xl font-extrabold tracking-tight text-[#1a1a1a]">Frontend</p>
                  <p className="text-xs text-gray-500 mt-0.5">no admin access needed</p>
                </div>
              </div>

              <ul className="mb-8 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></span>SEO health — incl. Core Web Vitals, schema, meta</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></span>Conversion tracking — GA4, GTM, legacy tags</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></span>UX &amp; front-end testing — forms, mobile, nav, imagery</li>
              </ul>

              <Link href="/onboarding/website-audit" className="mt-auto block w-full rounded-[10px] bg-[#1a1a1a] py-3.5 text-center text-sm font-semibold text-white hover:bg-[#333] transition-colors">
                Open Website Audit →
              </Link>
              <p className="mt-3 text-center text-xs text-gray-400">Exports to PDF for client records</p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <p className="text-xs text-gray-400">© Marketing Sweet · Internal tools · Team access only</p>
          <p className="text-xs text-gray-400">Password protected</p>
        </div>
      </footer>

    </div>
  )
}
