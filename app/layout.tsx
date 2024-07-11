import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavbarLarge from "@/shared/component/navigation/nav-bar-large";
import Footer from "@/shared/component/footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
const palanquin = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome to Momo",
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
      <body className={palanquin.className}>
        <NavbarLarge />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
