import createMiddleware from 'next-intl/middleware'
import { LOCALES_LIST } from '@/constants/locales'

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES_LIST,

  // Used when no locale matches
  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en)/:path*'],
}
