import createMiddleware from 'next-intl/middleware'
import { LOCALES_LIST, DEFAULT_LOCALE } from '@/constants/locales'

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES_LIST,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(zh|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
}
