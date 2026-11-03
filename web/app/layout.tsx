import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./portfolio.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DSA Pattern Atlas — Learn Coding Interview Patterns",
  description:
    "Learn data structures and algorithms through reusable patterns in dependency order. Choose a revision scope, practice on LeetCode, and track completion.",
  applicationName: "DSA Pattern Atlas",
  openGraph: {
    title: "DSA Pattern Atlas — Learn Coding Interview Patterns",
    description: "A dependency-ordered DSA curriculum with private progress tracking.",
    type: "website",
    images: [`${basePath}/og-pattern-atlas.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSA Pattern Atlas — Learn Coding Interview Patterns",
    description: "Learn reusable patterns. Track real progress.",
    images: [`${basePath}/og-pattern-atlas.png`],
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1d1b",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('tejesh-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}` }} /></head>
      <body>{children}</body>
    </html>
  );
}
