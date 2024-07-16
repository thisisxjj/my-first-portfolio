import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { JetBrains_Mono } from 'next/font/google'

// components
import Header from '@/components/header/Header'
import PageTransition from '@/components/transition/PageTransition'
import StairTransition from '@/components/transition/StairTransition'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrainsMono',
})

export const metadata: Metadata = {
  keywords: [
    'thisisxjj',
    'xjj',
    'jayjay',
    'jayjay xia',
    'xiajj',
    'Jay Jay xia',
    'Jay xia',
    'javascript',
    'java',
    'react',
    'vue',
    'vue3',
    'nextjs',
    'tailwind',
    'tailwindcss',
  ],
  description:
    'thisisxjj, xjj, jayjay, jayjay xia, xiajj, Jay Jay xia, Jay xia, javascript, java, react, vue, vue3, nextjs, tailwind, tailwindcss',
}

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
          <Toaster position="top-center" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
