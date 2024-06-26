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
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
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
