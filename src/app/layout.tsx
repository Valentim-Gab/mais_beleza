import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Ubuntu } from 'next/font/google'
import HeaderMobile from '@/components/header/header-mobile'
import Header from '@/components/header/header'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: '+ Beleza',
  description: 'Serviços de estética e terapias, cuidados da sua beleza externe e interna.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={ubuntu.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
        <Header />
        {/* <HeaderMobile /> */}
        {children}
        {/* <Toaster /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
