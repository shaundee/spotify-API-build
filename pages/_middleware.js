import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    //Token will exist if user is logged in
const token = await getToken({ req, secret: process.env.JWT_SECRET });

const { pathname } = req.nextUrl
// Allow the request is the following is true...
//(1) Its  request for next-auth session & provider fetching
// (2) if the token exists 

if (pathname.includes("/api/auth") || token){
    return NextResponse.next();
}
//Redirect user to login if there is no token and are requesting a protected route
if (!token && pathname !== '/login'){
return NextResponse.redirect('/login');
  }
}
