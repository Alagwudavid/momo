import type { Metadata } from "next";
// import { Palanquin } from "next/font/google";
// import "@/en/globals.css";

// const palanquin = Palanquin({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

import React from "react";
import Navbar from "@/en/shared/component/navigation/Navbar";
import Footer from "@/shared/component/footer/Footer";
import SubNavbarMobile from "@/en/shared/component/navigation/SubNavbarMobile";
import NavMenu from "@/en/shared/component/navigation/nav-menu";

export const metadata: Metadata = {
  title: "Dashboard - kiosk",
  description:
    "An ecommerce web application used to bring official vendors and student vendors together to the students",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <section className="max-w-screen-2xl mx-auto flex flex-row relative">{children}</section>
        <Footer />
    </>
  );
}
