import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { LOCALES_LIST } from './constants/locales'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: LOCALES_LIST })
