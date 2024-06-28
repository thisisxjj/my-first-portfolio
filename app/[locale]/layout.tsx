import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { JetBrains_Mono } from 'next/font/google'

// components
import Header from '@/components/header/Header'
import PageTransition from '@/components/transition/PageTransition'
import StairTransition from '@/components/transition/StairTransition'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrainsMono',
})

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className="scrollbar-thin scrollbar-thumb-accent scrollbar-track-[#27272c]"
    >
      <body className={jetBrainsMono.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
