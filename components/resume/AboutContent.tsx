import { useMessages } from 'next-intl'
import React from 'react'

interface AboutContent {
  title: string
  description: string
  info: {
    fieldName: string
    fieldValue: string
  }[]
}

interface AboutContentProps {
  about: AboutContent
}

const AboutContent = ({ about }: AboutContentProps) => {
  const messages = useMessages()
  const resumeMessages = messages.Resume as Record<string, string>

  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{resumeMessages[about.title]}</h3>
      <p className="text-white/60 mx-auto xl:mx-0">
        {resumeMessages[about.description]}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
        {about.info.map(({ fieldName, fieldValue }) => (
          <li
            key={fieldName}
            className="flex items-center justify-center xl:justify-start gap-4"
          >
            <span className="text-white/60">{fieldName}</span>
            <span className="text-xl">{fieldValue}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutContent
