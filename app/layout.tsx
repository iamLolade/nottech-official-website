import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import MainLayout from "./components/layout/MainLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "!Not Tech | Innovative Software Solutions",
  description: "At !Not Tech, we're not just shaping the future; we're redefining it. We pioneer solutions that empower businesses, communities, and individuals across Africa.",
  icons: {
    icon: '/images/company-assets/nottech_favicon_square.png',
    apple: '/images/company-assets/nottech_favicon_square.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
