import type { Metadata } from "next";
import { Public_Sans, Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gulmoharspaces.com"),
  title: "Gulmohar Spaces | Interiors, planning and art",
  description: "Gulmohar Spaces creates interiors around the people who inhabit them.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gulmohar Spaces",
    description: "Spaces for ambition, connection and ease.",
    url: "/",
    siteName: "Gulmohar Spaces",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/reference/hero-bedroom.jpg", alt: "Gulmohar Spaces bedroom interior" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${questrial.variable} ${publicSans.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
