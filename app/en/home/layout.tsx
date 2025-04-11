import type { Metadata } from "next";
import { Palanquin } from "next/font/google";
import "../globals.css";

const palanquin = Palanquin({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

import React from "react";

export const metadata: Metadata = {
  title: "Kiosk marketplace | a student to vendor based ecommerce platform",
  description:
    "An ecommerce web application used to bring official vendors and student vendors together to the students",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`bg-[#f2f2f2] relative ${palanquin.className}`}>
      {children}
    </main>
  );
}
