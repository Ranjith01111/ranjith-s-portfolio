import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ranjith's Portfolio",
  description: "Portfolio of Ranjith V, AI & Data Science Engineer specializing in Machine Learning, Deep Learning, and Data Analytics. Featured projects: AETHER spacecraft monitoring, AI Video Generator, and IoT solutions.",
  keywords: ["Ranjith V", "AI Engineer", "Data Science", "Machine Learning", "Deep Learning", "Python", "TensorFlow", "Power BI", "Portfolio", "AETHER", "Aerospace", "IoT"],
  authors: [{ name: "Ranjith V" }],

  openGraph: {
    title: "Ranjith V - AI & Data Science Engineer",
    description: "Portfolio showcasing AI/ML projects, data science solutions, and innovative engineering work",
    url: "https://ranjith.tech",
    siteName: "Ranjith V Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranjith V - AI & Data Science Engineer",
    description: "Portfolio showcasing AI/ML projects, data science solutions, and innovative engineering work",
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
