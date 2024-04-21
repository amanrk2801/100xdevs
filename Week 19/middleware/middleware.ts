// import { NextRequest, NextResponse } from "next/server";

// let requestCount = 0;
// export function middleware(req: NextRequest) {
//   requestCount++;
//   const res = NextResponse.next();
//   console.log("request count: " + requestCount);
//   return res;
// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/api/:path*',
//   }

// -------------------------------------

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}
