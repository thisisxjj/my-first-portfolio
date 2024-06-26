import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import Nav from './Nav'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  const t = useTranslations('Index')
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            XiaJJ<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>{t('hireMe')}</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
