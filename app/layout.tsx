import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import { FooterWrapper } from "@/components/footer/footer-wrapper";

export const metadata: Metadata = {
  title: "Asad Komi",
  description:
    "Building beautiful and functional web applications with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className + " scroll-smooth"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">{children}</div>
          <Analytics />
          <FooterWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
