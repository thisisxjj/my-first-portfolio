import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import Photo from '@/components/socials/Photo'
import Socials from '@/components/socials/Socials'
import Stats from '@/components/socials/Stats'
import type { Metadata } from 'next'
import ResumeDownloadButton from '@/components/resume/ResumeDownloadButton'
import Link from 'next/link'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Index' })
  return { title: `${t('home')} - This is Xjj` }
}

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  const t = useTranslations('Home')
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="inline-block mb-2 xl:mb-4 text-4xl">
              {t('profession')}
            </span>
            <h1 className="h1 mb-6">
              {t('hello')} <br />{' '}
              <span className="text-accent">JayJay Xia</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{t('slogan')}</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <ResumeDownloadButton locale={locale} />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
      <div className="absolute bottom-[-48px] py-2 w-full text-center">
        <Link
          target="_blank"
          className="text-white/55 hover:text-white transition-colors"
          href="https://beian.miit.gov.cn"
        >
          鄂ICP备2024063440号-1
        </Link>
      </div>
    </section>
  )
}

export default Home
