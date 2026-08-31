import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fitness9plus.vercel.app"),
  title: "FITNESS 9 PLUSE | Elite Lifestyle & Physique Transformation System",
  description:
    "Build your ultimate physique with Fitness Pluse 9 (F9). 1-on-1 private coaching, bespoke biomechanical training, precision metabolic nutrition, and 24/7 direct coach WhatsApp accountability with Head Coach Nandhan R.",
  keywords: [
    "Fitness 9 Plus",
    "Fitness Pluse 9",
    "F9 Fitness",
    "Nandhan R Coach",
    "Physique Transformation",
    "Online Gym Coaching",
    "Body Recomposition",
    "Macro Calculator",
    "Hypertrophy Training",
    "Personal Fitness Coach"
  ],
  authors: [{ name: "Nandhan R - Fitness Pluse 9" }],
  creator: "Fitness Pluse 9",
  openGraph: {
    title: "FITNESS 9 PLUSE | Elite Lifestyle & Physique Transformation",
    description:
      "Engineered online physique transformation system. Biomechanical training, flexible metabolic nutrition, and relentless 1-on-1 accountability.",
    url: "https://fitness9plus.vercel.app",
    siteName: "Fitness Pluse 9",
    images: [
      {
        url: "/images/coach-physique.jpg",
        width: 1200,
        height: 630,
        alt: "Fitness Pluse 9 - Build Your Ultimate Physique",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FITNESS 9 PLUSE | Elite Lifestyle & Physique Transformation",
    description:
      "Engineered online physique transformation system. Biomechanical training, flexible metabolic nutrition, and relentless 1-on-1 accountability.",
    images: ["/images/coach-physique.jpg"],
  },
  icons: {
    icon: "/images/f9-logo.png",
    apple: "/images/f9-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}