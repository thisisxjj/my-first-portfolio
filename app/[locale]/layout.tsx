import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

// components
import Header from '@/components/header/Header'
import PageTransition from '@/components/transition/PageTransition'
import StairTransition from '@/components/transition/StairTransition'

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </NextIntlClientProvider>
  )
}
