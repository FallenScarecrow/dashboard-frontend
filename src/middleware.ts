// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const nextUrl = req.nextUrl;

  if (nextUrl.pathname.startsWith('/dashboard')) {
    if (!req.cookies.has('authToken')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
}
