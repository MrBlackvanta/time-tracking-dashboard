import { siteUrl } from "@/app/site";
import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Time Tracking Dashboard";
const title = `${siteName} | Hours by activity`;
const description =
  "Where the hours went across work, play, study, exercise, social and self care, each against the period before, by the day, the week or the month.";

const card = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Time Tracking Dashboard, with a week of hours across six activities",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [card],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [card],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1323",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} antialiased`}>
      <body className="relative grid min-h-dvh grid-rows-1">{children}</body>
    </html>
  );
}
