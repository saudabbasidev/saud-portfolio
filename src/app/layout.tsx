import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Saud dev",
  description:
    "Building high-end websites and web apps for startups, businesses, and founders.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Saud Abbasi | Full Stack Next.js Developer",
    description:
      "Building high-end websites and web apps for startups, businesses, and founders.",
    url: "https://saud-portfolio.vercel.app",
    siteName: "Saud Abbasi",
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "Saud Abbasi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saud Abbasi | Full Stack Next.js Developer",
    description:
      "Building high-end websites and web apps for startups, businesses, and founders.",
    images: ["/preview.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full w-full  ${manrope.variable} ${instrumentSerif.variable}`}
    >
      <body className="">{children}</body>
    </html>
  );
}
