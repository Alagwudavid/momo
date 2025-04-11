"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import Sidebar from "@/en/shared/component/navigation/Sidebar";

import Navbar from "@/en/shared/component/navigation/Navbar";
import Footer from "@/shared/component/footer/Footer";
import SubNavbarMobile from "@/en/shared/component/navigation/SubNavbarMobile";
import NavMenu from "@/en/shared/component/navigation/nav-menu";
import { categories, products, brands } from "@/en/shared/constant/constants";

//ICONS
import ChevronDownIcon from "@/en/shared/icon/svg/chevron-down.svg";
//END ICONS
export default function Home() {
  const breakpointColumnsObj = {
    default: 5,
    1200: 3,
    880: 2,
    620: 1,
  };
  return (
    <>
      {/* <div className="sm:hidden block mx-auto py-2 max-w-screen-2xl px-4 bg-white border-[1px]">
        <SubNavbarMobile />
      </div>
       */}
      <section className="flex flex-row w-full">
          {/* <aside
            className="bg-white sticky top-0 left-0 w-56 h-screen"
            aria-label="Sidebar"
          > */}
            <Sidebar />
          {/* </aside> */}
        <div className="max-w-screen-2xl block relative">
        <Navbar />
        <h1>Home Page</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}
