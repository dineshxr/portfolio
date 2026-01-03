import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const seoDescription = "Dinesh Puppala is an award-winning Regulatory Affairs Leader at Google specializing in Digital Health, AI/ML medical devices, SaMD, and FDA regulatory strategy. Expert in 510(k), De Novo, and global regulatory frameworks.";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Regulatory Affairs & Digital Health Expert`,
    template: `%s | ${DATA.name}`,
  },
  description: seoDescription,
  keywords: [
    "Dinesh Puppala",
    "Regulatory Affairs",
    "Digital Health",
    "FDA",
    "510(k)",
    "De Novo",
    "SaMD",
    "AI in Healthcare",
    "Medical Device Regulation",
    "Google Health",
    "RAPS",
    "Regulatory Science",
    "Johns Hopkins",
  ],
  authors: [{ name: "Dinesh Puppala", url: DATA.url }],
  creator: "Dinesh Puppala",
  openGraph: {
    title: `${DATA.name} | Regulatory Affairs & Digital Health Expert`,
    description: seoDescription,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me.png",
        width: 800,
        height: 800,
        alt: "Dinesh Puppala - Regulatory Affairs Expert",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Regulatory Affairs & Digital Health Expert`,
    card: "summary_large_image",
    description: seoDescription,
    creator: "@dineshxr",
    images: ["/me.png"],
  },
  alternates: {
    canonical: DATA.url,
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
