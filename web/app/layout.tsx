import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pattern Atlas — DSA Progress Lab",
  description:
    "Master 140 reusable DSA patterns, track 1,197 LeetCode problems, and forecast your completion date from your actual pace.",
  applicationName: "Pattern Atlas",
  openGraph: {
    title: "Pattern Atlas — DSA Progress Lab",
    description: "A dependency-ordered DSA curriculum with private progress tracking.",
    type: "website",
    images: [`${basePath}/og-pattern-atlas.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Atlas — DSA Progress Lab",
    description: "Learn reusable patterns. Track real progress.",
    images: [`${basePath}/og-pattern-atlas.png`],
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe5",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
