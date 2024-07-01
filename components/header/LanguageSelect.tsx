'use client'

import { useMessages } from 'next-intl'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { useRouter, usePathname } from '@/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { cn } from '@/lib/utils'

const LanguageSelect = ({ defaultValue }: { defaultValue: string }) => {
  const messages = useMessages()
  const indexMessages = messages.Index as Record<string, string>
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: string) {
    const nextLocale = value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <Select
      disabled={isPending}
      defaultValue={defaultValue}
      onValueChange={onSelectChange}
    >
      <SelectTrigger
        className={cn('w-auto', isPending && 'transition-opacity opacity-30')}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{indexMessages['english']}</SelectItem>
        <SelectItem value="zh">{indexMessages['chinese']}</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelect
