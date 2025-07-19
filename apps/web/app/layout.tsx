import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "FreshCutz Barbershop | Premium Men's Grooming & Haircuts",
  description:
    "Experience the finest in men's grooming at FreshCutz Barbershop. Professional haircuts, beard trims, hot towel shaves, and premium barbering services in downtown. Book your appointment today!",
  keywords:
    "barbershop, men's haircuts, beard trim, hot towel shave, men's grooming, professional barber, downtown barbershop, hair styling",
  authors: [{ name: "FreshCutz Barbershop" }],
  creator: "FreshCutz Barbershop",
  publisher: "FreshCutz Barbershop",
  openGraph: {
    title: "FreshCutz Barbershop | Premium Men's Grooming & Haircuts",
    description:
      "Experience the finest in men's grooming at FreshCutz Barbershop. Professional haircuts, beard trims, hot towel shaves, and premium barbering services.",
    url: "https://freshcutzbarbershop.com",
    siteName: "FreshCutz Barbershop",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FreshCutz Barbershop - Premium Men's Grooming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreshCutz Barbershop | Premium Men's Grooming & Haircuts",
    description:
      "Experience the finest in men's grooming at FreshCutz Barbershop. Professional haircuts, beard trims, hot towel shaves, and premium barbering services.",
    images: ["/og-image.jpg"],
    creator: "@freshcutzbarber",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
