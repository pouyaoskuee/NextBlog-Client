import { NextResponse } from "next/server";

export async function middleware(req) {
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
        const user = await middlewareAuth(req);
        if (user) {
            const homeUrl = new URL(`/profile`, req.url);
            return NextResponse.redirect(homeUrl);
        }
    }

    if (pathname.startsWith("/profile")) {
        const user = await middlewareAuth(req);

        if (!user) {
            const signinUrl = new URL(`/signin?redirect=${pathname}`, req.url);
            return NextResponse.redirect(signinUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:path*", "/signin", "/signup"],
};


async function middlewareAuth(req) {
    const options = {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: `${req.cookies.get("accessToken")?.name}=${req.cookies.get("accessToken")?.value}; ${req.cookies.get("refreshToken")?.name}=${req.cookies.get("refreshToken")?.value}` || "-",
        },
    };

    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, options).then((res) => res.json()).then((res) => res.data);
    const { user } = data || {};
    return user;
}
