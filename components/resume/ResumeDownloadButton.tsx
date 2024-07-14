'use client'

import React from 'react'
import { Button } from '../ui/button'
import { FiDownload } from 'react-icons/fi'
import { useMessages } from 'next-intl'
import { updateResumeDownloadCount } from '@/lib/update.action'
import { downloadPDF } from '@/lib/utils'

const ResumeDownloadButton = ({ locale }: { locale: string }) => {
  const messages = useMessages()
  const homeMessages = messages.Home as Record<string, string>

  const handleDownloadClick = async (e: any) => {
    downloadPDF(
      `https://static.thisisxjj.com/pdf/resume_${locale}.pdf`,
      homeMessages['resumeFilename']
    )
  }

  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={() => updateResumeDownloadCount(locale)}
    >
      <div onClick={handleDownloadClick}>
        <span>{homeMessages['downloadResume']}</span>
        <FiDownload className="text-xl" />
      </div>
    </Button>
  )
}

export default ResumeDownloadButton
