import { JetBrains_Mono, Roboto_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  description:
    'thisisxjj, xjj, jayjay, javascript, java, react, vue, vue3, nextjs, tailwind, tailwindcss',
}

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrainsMono',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-robotoMono',
})

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html
      lang={locale}
      className="scrollbar-thin scrollbar-thumb-accent scrollbar-track-[#27272c]"
    >
      <body className={`${jetBrainsMono.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
