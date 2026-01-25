import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/app/components/Footer";
import MainHeader from "@/app/components/MainHeader";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ASI UK | Adventist-laymen‘s Services and Industries",
  description: "ASI is an organisation comprised of members of the Seventh-day Adventist church who are engaged in spreading the gospel of Christ to the world.",
  keywords: "ASI-UK, ASI, Adventist, Adventist UK, Adventist-laymen's Services and Industries (ASI), ministries, church",
  openGraph: {
    title: "ASI UK | Adventist-laymen‘s Services and Industries",
    description: "ASI is an organisation comprised of members of the Seventh-day Adventist church who are engaged in spreading the gospel of Christ to the world.",
    url: "https://www.asiuk.org",
    type: "website",
    siteName: "ASI UK | Adventist-laymen‘s Services and Industries",
    locale: "en_GB"
  },
  applicationName: "ASI UK | Adventist-laymen‘s Services and Industries",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  appleWebApp: {
    title: "ASI UK | Adventist-laymen‘s Services and Industries",
    statusBarStyle: "default",
    capable: true
  },
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
      <MainHeader/>
      <main className="pt-[100px] md:pt-[110px] flex-grow">
        {children}
      </main>
      <Footer />
      </body>
      </html>
  )
}
