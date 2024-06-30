import { useTranslations } from 'next-intl'
import Link from 'next/link'
import CountNum from '@/components/not-found/CountNum'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <section className="h-full w-full pt-20 overflow-hidden font-secondary flex flex-col items-center justify-center">
      <CountNum />
      <div className="flex items-center flex-col gap-4">
        <h2 className="capitalize">{t('main')}</h2>
        <div className="text-center">
          <p>{t('desc1')}</p>
          <p>{t('desc2')}</p>
        </div>

        <Button type="button">
          <Link href="/">{t('back')}</Link>
        </Button>
      </div>
    </section>
  )
}
