import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ASI UK",
  description: "Adventist-laymen‘s Services and Industries (ASI), UK Chapter",
  keywords: "ASI-UK, ASI, Adventist, Adventist UK, Adventist-laymen's in Services and Industry (ASI), ministries, church",
  openGraph: {
    siteName: "ASI UK",
    type: "website",
    locale: "en_GB"
  },
  applicationName: "ASI UK",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  appleWebApp: {
    title: "ASI UK",
    statusBarStyle: "default",
    capable: true
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
