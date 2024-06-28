'use client'

import { useMessages } from 'next-intl'
import { CiMenuFries } from 'react-icons/ci'
import { Link, usePathname } from '@/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

const MobileNav = () => {
  const pathname = usePathname()
  const messages = useMessages()

  const indexMessage = messages.Index as Record<string, string>

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              XiaJJ<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map(({ name, path }) => (
            <Link
              href={path}
              key={name}
              className={cn(
                'text-xl capitalize hover:text-accent transition-all',
                path === pathname && 'text-accent border-b-2 border-accent'
              )}
            >
              {indexMessage[name]}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
