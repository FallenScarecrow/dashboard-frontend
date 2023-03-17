/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse, NextRequest } from 'next/server';

import { getAuthSession } from '~@lib/utils/session';

import publicPaths from 'data/publicPaths';

// export const config = { matcher: ['/dashboard/:page*'] };
export const config = { matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)' };

export async function middleware(request: NextRequest) {
  const session = await getAuthSession(request);

  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    request.nextUrl.searchParams.set('from', request.nextUrl.pathname);
    request.nextUrl.pathname = '/login';
    return NextResponse.redirect(request.nextUrl);
  }

  if (session && publicPaths.find(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}
