import { NextResponse } from 'next/server';

function getUserStatus(token) {
  if (token === 'admin') {
    return 'admin';
  } else if (token === 'user') {
    return 'user';
  } else {
    return 'guest';
  }
}

function getRequiredStatus(pathname) {
  if (pathname === '/admin') {
    return 'admin';
  } else if (pathname === '/profile') {
    return 'user';
  } else {
    return 'guest';
  }
}

export default function middleware(req) {
  const { origin } = req.nextUrl;
  const token = req.cookies.token;
  const userStatus = getUserStatus(token);
  const requiredStatus = getRequiredStatus(req.nextUrl.pathname);

  if (userStatus !== requiredStatus) {
    if (userStatus === 'guest') {
      return NextResponse.rewrite(`${origin}/login`);
    } else {
      return NextResponse.rewrite(`${origin}/error`);
    }
  }
}
