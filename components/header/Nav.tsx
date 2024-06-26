'use client'

import { cn } from '@/lib/utils'
import { Link, usePathname } from '@/navigation'
import { useMessages } from 'next-intl'

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

const Nav = () => {
  const message = useMessages()
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map(({ name, path }) => {
        const indexMessage = message.Index as Record<string, string>

        return (
          <Link
            className={cn(
              'capitalize font-medium hover:text-accent transition-all',
              path === pathname && 'text-accent border-b-2 border-accent'
            )}
            key={name}
            href={path}
          >
            {indexMessage[name]}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
