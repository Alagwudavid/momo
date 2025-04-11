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
      <Navbar />
      <div className="sm:hidden block mx-auto py-2 max-w-screen-2xl px-4 bg-white border-[1px]">
        <SubNavbarMobile />
      </div>
      <div className="block mx-auto max-w-screen-2xl bg-[#fff] text-black font-semibold z-[1] shadow">
        <NavMenu />
      </div>
      <section className="max-w-screen-2xl mx-auto flex flex-row relative">
      <aside
        className="bg-white sticky top-0 left-0 w-56 h-screen"
        aria-label="Sidebar"
      >
        <Sidebar />
      </aside>
      <div className="w-full p-4 overflow-x-auto overflow-y-auto h-full bg-white">
        <div className="max-w-screen-2xl mx-auto">
          {products.length > 0 ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {products.map((products) => (
                <div
                  key={products.id}
                  className="mb-3 p-[6px] flex-shrink-0 bg-white border-[1px] shadow rounded-[8px] group overflow-hidden"
                >
                  <Link href={`/en/${products.name
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/ /g, "-")}`}>
                    <div className="w-full rounded-[8px] border-[1px] overflow-hidden relative">
                    <div className="bg-black opacity-[0.1] w-full h-full absolute top-0 right-0 z-[1]"></div>
                      <Image
                        src={products.bg}
                        alt="bg image"
                        className="images transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-row justify-between gap-1 py-2">
                    <div className="flex flex-col">
                      <div className="font-bold text-base capitalize">{products.name}</div>
                      <div className="text-sm text-gray-500">{products.storeName}</div>
                      </div>
                      <div className="flex flex-col justify-center text-xs text-right">
                          {products.oldPrice && (
                            <span className="text-red-500 line-through">
                              {products.oldPrice}
                            </span>
                          )}
                          <span className="text-base">{products.price}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Masonry>
          ) : (
            <p>Sorry, no product has been added to this category yet</p>
          )}
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
