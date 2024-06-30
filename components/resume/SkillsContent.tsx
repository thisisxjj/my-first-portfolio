import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'
import { useMessages } from 'next-intl'

interface SkillItem {
  icon: React.ReactNode
  name: string
}

interface SkillsContent {
  title: string
  description: string
  skillList: SkillItem[]
}

interface SkillsContentProps {
  skills: SkillsContent
}

const SkillsContent = ({ skills }: SkillsContentProps) => {
  const messages = useMessages()
  const resumeMessages = messages.Resume as Record<string, string>

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{resumeMessages[skills.title]}</h3>
        <p className="text-white/60 mx-auto xl:mx-0">
          {resumeMessages[skills.description]}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skillList.map(({ name, icon }) => (
          <li key={name}>
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    {icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsContent
