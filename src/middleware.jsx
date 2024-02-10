import { NextResponse } from "next/server";
import { VerifyToken } from "./utilities/token";

export async function middleware(req, res) {
  const path = req.nextUrl.pathname;
  // console.log(path);
  // console.log(req.cookies);
  try {
    const token = req.cookies.get("token");
    if (token) {
      if (path === "/login" || path === "/sign" || path === "/checkotp") {
        return NextResponse.redirect(new URL("/", req.url));
      }

      if (path === "/" || path === "/my" || path === "/new" || path === '/api/alls/createmounth' || path === `/api/alls/createperson` || path === "/api/alls/person" || path === '/api/user/logout') {

        const decode = await VerifyToken(token['value']);
        const requestHeader = new Headers(req.headers);
        requestHeader.set("email", decode["email"]);
        requestHeader.set("id", decode["id"]);
        return NextResponse.next({ request: { headers: requestHeader } });
      }
    } else {
      const token2 = JSON.parse(req.headers.get("token"))['value']
      if (token2) {
        if (path === "/api/user") {
          return NextResponse.json(new URL("/", req.url));
        }
        if (path.startsWith("/api/alls")) {
          const decode = await VerifyToken(token2);
          const requestHeader = new Headers(req.headers);
          requestHeader.set("email", decode["email"]);
          requestHeader.set("id", decode["id"]);
          return NextResponse.next({ request: { headers: requestHeader } },);
        }
      } else {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  } catch (e) {
    if (path.startsWith('/api/alls')) {
      return NextResponse.json({ status: 'fail', data: 'you dont have any token' });
    }
    if (path === '/' || path === '/my' || path === '/api/alls/mount') {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (path === '/login' || path === '/sign') {
      return NextResponse.next();
    }
  }
}

