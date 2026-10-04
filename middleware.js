import { NextResponse } from 'next/server'

// ⌨️ บล็อก 2.3 — Auth Middleware ป้องกันหน้า /dashboard และ API /api/dashboard-data
export function middleware(request) {
  const session = request.cookies.get('session')?.value

  if (!session) {
    // ถ้าเป็น API route ให้ส่ง JSON 401 Unauthorized กลับไป (แก้ช่องโหว่บล็อก 2.2)
    if (request.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // ถ้าเป็นหน้าเว็บ เช่น /dashboard ให้ redirect ไปหน้า /login
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/dashboard-data/:path*'],
}
