import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Cegah akses ke file source
  if (
    url.pathname.includes('.tsx') ||
    url.pathname.includes('.jsx') ||
    url.pathname.includes('.ts') ||
    url.pathname.includes('.js') ||
    url.pathname.includes('.map') ||
    url.pathname.includes('.json') ||
    url.pathname.includes('.config') ||
    url.pathname.includes('/_next/static/')
  ) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Tambahkan header keamanan
  const response = NextResponse.next()
  
  // Cegah view page source dengan menghapus source map
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'no-referrer')
  
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

