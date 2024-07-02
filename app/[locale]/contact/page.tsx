import { getTranslations } from 'next-intl/server'
import ContactForm from '@/components/contact/ContactForm'
import MotionContainer from '@/components/contact/MotionContainer'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import type { Metadata } from 'next'

const info = [
  {
    icon: <FaPhoneAlt />,
    name: 'phone',
    value: 'phoneValue',
  },
  {
    icon: <FaEnvelope />,
    name: 'email',
    value: 'emailValue',
  },
  {
    icon: <FaMapMarkedAlt />,
    name: 'address',
    value: 'addressValue',
  },
]

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Index' })
  return { title: `${t('contact')} - This is Xjj` }
}

const ContactPage = () => {
  const t = useTranslations('Contact')

  return (
    <MotionContainer>
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:w-[54%] order-2 xl:order-none">
          <ContactForm />
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item) => (
              <li key={item.name} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{t(item.name)}</p>
                  <h3 className="text-xl">{t(item.value)}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionContainer>
  )
}

export default ContactPage
