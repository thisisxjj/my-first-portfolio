import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { getTranslations } from 'next-intl/server'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  getAboutMeData,
  AboutMeDataType,
  getExperienceAndEducationData,
} from '@/lib/notion'
import MotionContainer from '@/components/resume/MotionContainer'
import ExperienceContent from '@/components/resume/ExperienceContent'
import EducationContent from '@/components/resume/EducationContent'
import SkillsContent from '@/components/resume/SkillsContent'
import AboutContent from '@/components/resume/AboutContent'
import type { Metadata } from 'next'

const about = {
  title: 'about',
  description: 'aboutDesc',
  info: [] as AboutMeDataType,
}

// experience data
const experience = {
  icon: '/resume/badge.svg',
  title: 'experience',
  description: 'experienceDesc',
  items: [],
}

// experience data
const education = {
  icon: '/resume/cap.svg',
  title: 'education',
  description: 'educationDesc',
  items: [],
}

// skills data
const skills = {
  title: 'skills',
  description: 'skillsDesc',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <FaVuejs />,
      name: 'vue.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
  ],
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Index' })
  return { title: `${t('resume')} - This is Xjj` }
}

const ResumePage = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params

  const [aboutData, experienceAndEducationData] = await Promise.all([
    getAboutMeData(locale),
    getExperienceAndEducationData(locale),
  ])

  const t = await getTranslations('Resume')
  about.info = aboutData
  experience.items = experienceAndEducationData.Experience
  education.items = experienceAndEducationData.Education

  return (
    <MotionContainer>
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">{t('experienceTitle')}</TabsTrigger>
          <TabsTrigger value="education">{t('educationTitle')}</TabsTrigger>
          <TabsTrigger value="skills">{t('skillsTitle')}</TabsTrigger>
          <TabsTrigger value="about">{t('aboutTitle')}</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <ExperienceContent experience={experience} />
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <EducationContent education={education} />
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
            <SkillsContent skills={skills} />
          </TabsContent>
          <TabsContent
            value="about"
            className="w-full text-center xl:text-left"
          >
            <AboutContent about={about} />
          </TabsContent>
        </div>
      </Tabs>
    </MotionContainer>
  )
}

export default ResumePage
