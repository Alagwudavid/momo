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
  title: "kiosk - business dashboard",
  description:
    "An ecommerce web application used to bring official vendors and student vendors together to the students",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="block">
        {/* <Navbar />
        
      <div className="sm:hidden block mx-auto py-2 max-w-screen-2xl px-4 bg-white border-[1px]">
        <SubNavbarMobile />
      </div> */}
      {/* <div className="block mx-auto max-w-screen-2xl bg-[#fff] text-black font-semibold z-[1] shadow">
        <NavMenu />
      </div> */}
        <div className={`bg-[#f2f2f2] flex flex-row relative`}>{children}</div>
        <Footer />
    </main>
  );
}
