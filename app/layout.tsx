import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mizhab Mujeeb NP | DevOps & Cloud Engineer",
  description:
    "BCA Graduate, AWS Certified, aspiring DevOps and Cloud Engineer focused on Cloud Infrastructure, CI/CD, Infrastructure as Code, Automation, and Cloud-Native technologies.",
  keywords: [
    "DevOps",
    "Cloud Engineer",
    "AWS",
    "CI/CD",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Infrastructure as Code",
    "Mizhab Mujeeb NP",
  ],
  authors: [{ name: "Mizhab Mujeeb NP" }],
  openGraph: {
    title: "Mizhab Mujeeb NP | DevOps & Cloud Engineer",
    description:
      "BCA Graduate, AWS Certified, aspiring DevOps and Cloud Engineer focused on Cloud Infrastructure, CI/CD, Infrastructure as Code, Automation, and Cloud-Native technologies.",
    url: "https://mizhab.dev",
    siteName: "Mizhab Mujeeb NP Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mizhab Mujeeb NP | DevOps & Cloud Engineer",
    description:
      "BCA Graduate, AWS Certified, aspiring DevOps and Cloud Engineer focused on Cloud Infrastructure, CI/CD, Infrastructure as Code, Automation, and Cloud-Native technologies.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
