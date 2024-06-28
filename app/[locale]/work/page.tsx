import MotionContainer from '@/components/work/MotionContainer'
import WorkContent, { Project } from '@/components/work/WorkContent'
import { getTranslations } from 'next-intl/server'
import { getWorkProjectData } from '@/lib/notion'
import type { Metadata } from 'next'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Index' })
  return { title: `${t('work')} - This is Xjj` }
}

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
