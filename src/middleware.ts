import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// এই রাউটগুলোতে এক্সেস করতে হলে লগইন থাকতেই হবে
const protectedRoutes = ["/dashboard", "/profile", "/orders"];
const adminRoutes = ["/admin", "/dashboard/admin"];

export async function middleware(req: NextRequest) {
  // ১. টোকেন বের করা (NextAuth এর সিক্রেট দিয়ে ডিকোড করা হয়)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // ২. ইউজার যদি লগইন না থাকে এবং প্রটেক্টেড রাউটে যেতে চায়
  if (!token && (protectedRoutes.includes(pathname) || adminRoutes.includes(pathname))) {
    const url = new URL("/login", req.url);
    url.searchParams.set("callbackUrl", encodeURI(req.url)); // লগইন শেষে আগের পেজে ফেরত আসবে
    return NextResponse.redirect(url);
  }

  // ৩. ইউজার যদি 'admin' রাউটে যেতে চায় কিন্তু তার রোল 'admin' না হয়
  if (adminRoutes.includes(pathname) && token?.role !== "admin") {
    // তাকে হোমপেজে বা ৪-০-৩ পেজে পাঠিয়ে দাও
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// কোন কোন পাথে মিডলওয়্যার কাজ করবে
export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/admin/:path*", 
    "/profile/:path*",
    "/orders/:path*"
  ],
};