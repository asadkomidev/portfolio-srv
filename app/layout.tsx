import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import { FooterWrapper } from "@/components/footer/footer-wrapper";
import { ConvexClientProvider } from "@/providers/convex-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={GeistSans.className + " scroll-smooth"}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen ">
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </div>
          <Analytics />
          <FooterWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
