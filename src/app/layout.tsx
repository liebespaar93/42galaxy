import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


const APP_NAME = "42 Galaxy";
const APP_DEFAULT_TITLE = "42 Galaxy";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "42의 과제 진행상황을 우주로 표현한 사이트 입니다"

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  // openGraph: {
  // },
}

export const viewport: Viewport = {
  themeColor: "#1976d2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
