import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gulmoharspaces.com"),
  title: {
    default: "Gulmohar Spaces | Interiors with a sense of place",
    template: "%s | Gulmohar Spaces",
  },
  description: "Gulmohar Spaces is an interior design studio creating enduring, evocative homes and hospitality spaces.",
  keywords: ["interior design studio", "interior architecture", "luxury interiors", "residential interiors India", "hospitality interiors"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gulmohar Spaces | Interiors with a sense of place",
    description: "Enduring, evocative homes and hospitality spaces across India.",
    url: "/",
    siteName: "Gulmohar Spaces",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulmohar Spaces | Interiors with a sense of place",
    description: "Enduring, evocative homes and hospitality spaces across India.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
