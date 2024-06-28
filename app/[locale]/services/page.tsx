import { getTranslations } from 'next-intl/server'
import { BsArrowDownRight } from 'react-icons/bs'
import { Link } from '@/navigation'
import { useMessages } from 'next-intl'
import type { Metadata } from 'next'
import MotionContainer from '@/components/services/MotionContainer'

const services = [
  {
    num: '01',
    title: 'webDev',
    description: 'webDevDesc',
    href: 'resume',
  },
  {
    num: '02',
    title: 'backendDev',
    description: 'backendDevDesc',
    href: 'resume',
  },
  {
    num: '03',
    title: 'testDev',
    description: 'testDevDesc',
    href: 'resume',
  },
  {
    num: '04',
    title: 'operationDev',
    description: 'operationDevDesc',
    href: 'resume',
  },
]

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Index' })
  return { title: `${t('services')} - This is Xjj` }
}

const ServicesPage = () => {
  const messages = useMessages()
  const servicesMessages = messages.Services as Record<string, string>

  return (
    <MotionContainer>
      {services.map(({ num, title, description, href }) => {
        return (
          <div
            key={num}
            className="flex-1 flex flex-col justify-center gap-6 group"
          >
            {/* top */}
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                {num}
              </div>
              <Link
                href={href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
                <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            {/* title */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
              {servicesMessages[title]}
            </h2>
            {/* description */}
            <p className="text-white/60">{servicesMessages[description]}</p>
            {/* border */}
            <div className="border-b border-white/20 w-full"></div>
          </div>
        )
      })}
    </MotionContainer>
  )
}

export default ServicesPage
