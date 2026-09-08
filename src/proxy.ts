import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/data/content";

// 🌐 Redirect un-prefixed paths to a locale: cookie → Accept-Language → default
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const cookie = request.cookies.get("locale")?.value;
  const header = request.headers.get("accept-language")?.split(",")[0]?.slice(0, 2);
  const locale = cookie && isLocale(cookie) ? cookie : header && isLocale(header) ? header : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|.*\\..*).*)"],
};
