import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
const palanquin = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome to Kiosk",
  description:
    "An ecommerce web application used to bring official producers and student vendors together to the students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={palanquin.className}>{children}</body>
    </html>
  );
}
