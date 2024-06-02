import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import { Providers } from './Providers'
import SessionGuard from '@/components/SessionGuard'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SessionGuard>
            {children}
          </SessionGuard>
        </Providers>
      </body>
    </html>
  )
}