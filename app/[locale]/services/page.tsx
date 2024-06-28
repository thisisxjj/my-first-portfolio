'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import { Link } from '@/navigation'
import { motion } from 'framer-motion'
import { useMessages } from 'next-intl'

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

const ServicesPage = () => {
  const messages = useMessages()
  const servicesMessages = messages.Services as Record<string, string>

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4, ease: 'easeIn' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPage
