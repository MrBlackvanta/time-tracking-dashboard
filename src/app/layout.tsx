import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { siteUrl } from "@/app/site";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Time tracking dashboard";
const description =
  "A time tracking dashboard reporting hours spent on work, play, study, exercise, social and self care, switchable between daily, weekly and monthly views.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
