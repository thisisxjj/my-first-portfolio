'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'
import { useMessages } from 'next-intl'
import { updateResumeDownloadCount } from '@/lib/update.action'

const ResumeDownloadButton = ({ locale }: { locale: string }) => {
  const messages = useMessages()
  const homeMessages = messages.Home as Record<string, string>

  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={() => updateResumeDownloadCount(locale)}
    >
      <Link href={`/api/download-pdf?time=${Date.now()}`}>
        <span>{homeMessages['downloadResume']}</span>
        <FiDownload className="text-xl" />
      </Link>
    </Button>
  )
}

export default ResumeDownloadButton
