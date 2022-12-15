import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const token = req.nextauth.token;

    if (token && pathname.matchAll(/\/(login|register)$/)) {
      window.location.href = '/dashboard';
    }
  },
  {
    pages: {
      signIn: '/login',
    },
  },
);

export const config = { matcher: ['/dashboard'] };
