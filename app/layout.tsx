import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: '여은정 수학',
  description: '아이마다 다른 수학, 맞춤으로 완성합니다',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
