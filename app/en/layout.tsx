import type { Metadata } from "next";
import { Palanquin } from "next/font/google";
import "./globals.css";

const palanquin = Palanquin({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

import React from "react";
import Navbar from "@/en/shared/component/navigation/Navbar";
import Sidebar from "@/en/shared/component/navigation/Sidebar";
import Footer from "./shared/component/footer/Footer";

export const metadata: Metadata = {
  title: "Momo marketplace | a student to vendor based ecommerce platform",
  description:
    "An ecommerce web application used to bring official vendors and student vendors together to the students",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={palanquin.className}>
        <Navbar />
        <div className="p-4 flex flex-row relative">
          <aside
            className="bg-white sticky top-0 left-0 w-64 h-screen"
            aria-label="Sidebar"
          >
            <Sidebar />
          </aside>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
