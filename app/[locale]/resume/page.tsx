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

import { getAboutMeData } from '@/lib/notion'
import MotionContainer from '@/components/resume/MotionContainer'
import ExperienceContent from '@/components/resume/ExperienceContent'
import EducationContent from '@/components/resume/EducationContent'
import SkillsContent from '@/components/resume/SkillsContent'
import AboutContent from '@/components/resume/AboutContent'
import type { Metadata } from 'next'

const about = {
  title: 'About Me',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'JayJay Xia',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+40) 321 654 678',
    },
    {
      fieldName: 'Experience',
      fieldValue: '4+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'China',
    },
    {
      fieldName: 'Email',
      fieldValue: 'thisisxjj@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Chinese, English',
    },
  ],
}

// experience data
const experience = {
  icon: '/resume/badge.svg',
  title: 'My Experience',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  items: [
    {
      company: 'Butterfly Effect Tech',
      position: 'Frontend Developer',
      duration: '2024.5 - 2024.6',
    },
    {
      company: 'China Carbon Tech',
      position: 'Frontend Developer',
      duration: '2023.11 - 2024.5',
    },
    {
      company: 'Huawei Tech',
      position: 'Fullstack Developer',
      duration: '2022.6 - 2023.7',
    },
    {
      company: 'BoChao Sofotware Tech',
      position: 'Frontend Developer',
      duration: '2020.7 - 2022.5',
    },
  ],
}

// experience data
const education = {
  icon: '/resume/cap.svg',
  title: 'My Education',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  items: [
    {
      institution: 'Online Course Platform',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2023',
    },
    {
      institution: 'Codecademy',
      degree: 'Front-end Track',
      duration: '2022',
    },
    {
      institution: 'Online Course',
      degree: 'Programming Course',
      duration: '2020 - 2021',
    },
    {
      institution: 'Tech Institution',
      degree: 'Certified Web Development',
      duration: '2019',
    },
    {
      institution: 'Design School',
      degree: 'Diploma in Graphic Design',
      duration: '2016 - 2018',
    },
    {
      institution: 'Community College',
      degree: 'Associate Degree in Computer Science',
      duration: '2014 - 2016',
    },
  ],
}

// skills data
const skills = {
  title: 'My Skills',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
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
  const data = await getAboutMeData(locale)

  return (
    <MotionContainer>
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
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
