'use client' // Error components must be Client Components

import CountNum from '@/components/not-found/CountNum'
import { Button } from '@/components/ui/button'
import { sendErrorMessage } from '@/lib/api'
import { Link } from '@/navigation'
import { useMessages } from 'next-intl'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const messages = useMessages()
  const errorMessages = messages.Error as Record<string, string>

  useEffect(() => {
    try {
      sendErrorMessage({
        message: error.message,
        digest: error.digest,
      })
    } catch (e) {
      console.log('Sending error message failed: ', e)
    }
  }, [error])

  return (
    <section className="h-full w-full pt-20 overflow-hidden font-secondary flex flex-col items-center justify-center">
      <CountNum start={404} end={500} />
      <div className="flex items-center flex-col gap-4">
        <h2 className="capitalize">{errorMessages['main']}</h2>
        <div className="text-center">
          <p>{errorMessages['desc1']}</p>
          <p>{errorMessages['desc2']}</p>
        </div>

        <Button type="button">
          <Link href="/">{errorMessages['back']}</Link>
        </Button>
      </div>
    </section>
  )
}
