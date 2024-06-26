import Photo from '@/components/socials/Photo'
import Socials from '@/components/socials/Socials'
import Stats from '@/components/socials/Stats'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { FiDownload } from 'react-icons/fi'

const Home = () => {
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
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
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
    </section>
  )
}

export default Home
