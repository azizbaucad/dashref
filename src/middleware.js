import { routes } from '@theme';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: [
    '/api/dispatch/:function*',
    '/dashboard/:function*',
    '/user/auth/:function*',
  ],
};

export async function middleware(req) {
  const {
    dashboard,
    auth: { login },
  } = routes.pages;
  const url = req.nextUrl.clone();

  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (url.pathname.includes(dashboard.initial) && !token) {
    url.pathname = login;
    return NextResponse.redirect(url);
  }

  if (url.pathname.includes(login) && token) {
    url.pathname = dashboard.initial;
    return NextResponse.redirect(url);
  }

  // Additionnal verifications
  if (url.pathname.includes('dispatch') && !req.headers.get('content-source')) {
    url.pathname = '/404';
    return NextResponse.redirect(url);
  }
  // End of verifications
}
