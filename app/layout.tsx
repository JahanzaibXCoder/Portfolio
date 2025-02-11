import type React from "react"
import { ThemeProvider } from "./providers/ThemeProvider"
import ErrorBoundary from "./components/ErrorBoundary"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Senior Developer Portfolio",
  description: "Portfolio showcasing projects and blogs of a Senior Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ErrorBoundary>
            <Header />
            <main>{children}</main>
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'