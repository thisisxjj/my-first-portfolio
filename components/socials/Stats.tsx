'use client'

import { cn } from '@/lib/utils'
import { useMessages } from 'next-intl'
import Countup from 'react-countup'

const stats = [
  {
    num: 4,
    text: 'workExperience',
  },
  {
    num: 18,
    text: 'projectCompleted',
  },
  {
    num: 15,
    text: 'masterTechnologies',
  },
  {
    num: 800,
    text: 'codeCommit',
  },
]

const Stats = () => {
  const messages = useMessages()
  const homeMessages = messages.Home as Record<string, string>

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] max-auto flex-col md:flex-row xl:max-w-none">
          {stats.map((stat) => (
            <div
              key={stat.text}
              className="flex-1 flex gap-4 items-center justify-center xl:flex-col"
            >
              <Countup
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p>{homeMessages[stat.text]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
