import React from 'react'
import { ScrollArea } from '../ui/scroll-area'

interface ExperienceItem {
  company: string
  duration: string
  position: string
}

interface Experience {
  icon: string
  title: string
  description: string
  items: ExperienceItem[]
}

interface ExperienceContentProps {
  experience: Experience
}

const ExperienceContent = ({ experience }: ExperienceContentProps) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {experience.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience.items.map(({ company, duration, position }, i) => (
            <li
              key={i}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{duration}</span>
              <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                {position}
              </h3>
              <div className="flex items-center gap-3">
                {/* dot */}
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{company}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}

export default ExperienceContent
