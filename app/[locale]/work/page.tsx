import MotionContainer from '@/components/work/MotionContainer'
import WorkContent, { Project } from '@/components/work/WorkContent'
import { getWorkProjectData } from '@/lib/notion'

/* const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Project 2',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
    image: '/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'Project 3',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }],
    image: '/work/thumb3.png',
    live: '',
    github: '',
  },
] */

const WorkPage = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params
  const projects = await getWorkProjectData(locale)
  return (
    <MotionContainer>
      <WorkContent projects={projects as Project[]} />
    </MotionContainer>
  )
}

export default WorkPage
