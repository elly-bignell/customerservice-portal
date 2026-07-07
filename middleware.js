import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Allow login page and API routes through
  if (pathname.startsWith('/login') || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Check for auth cookie
  const auth = request.cookies.get('ms_auth')
  if (!auth || auth.value !== 'authenticated') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
