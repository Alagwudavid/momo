import React from "react";
import Image from "next/image";

import { Offers } from "@/en/shared/constant/constants";
import UserMenu from "../shared/component/navigation/user-sidemenu";
import Search from "../shared/component/search/SearchBar";

//ICONS
import sparklesIcon from "@/en/shared/icon/svg/magic-wand.svg";
import Magicdeals from "../shared/component/layout/magic-deals";
import Trendingproduct from "../shared/component/layout/trending-products";
import Recentlyviewed from "../shared/component/layout/recently-viewed";
import ChevronRightIcon from "@/en/shared/icon/svg/chevron-right.svg";
//END ICONS
export default function Home() {
  return (
    <>
    <aside
        className="hidden sm:block sticky top-0 left-0 w-56 h-screen"
        aria-label="Sidebar"
      >
        <UserMenu />
      </aside>
    <div className="py-5 w-full px-4">
          <div className="flex flex-row justify-between flex-wrap">
              <Search />
            <div className="flex flex-row justify-between flex-wrap p-2 rounded-lg mb-3 bg-white hover:bg-slate-100 shadow">
            <a href="/en/category/" className="flex flex-row gap-1">
            Shop Now
            <Image src={ChevronRightIcon} alt="Icon" width={28} height={24} />
            </a>
            </div>
          </div>
          <div className="mb-3">
          <div className="flex flex-row gap-1 text-2xl font-bold my-3 py-1 text-black">
            <Image src={sparklesIcon} alt="Icon" width={28} height={24} />
            Magic Deals
          </div>
          <Magicdeals />
          </div>
          <div className="mb-3">
          <div className="flex flex-row gap-1 text-2xl font-bold my-3 py-1 text-black">
            Trending Products
          </div>
          <Trendingproduct />
          </div>
          <div className="mb-3">
          <div className="flex flex-row gap-1 text-2xl font-bold my-3 py-1 text-black">
            Recently Viewed
          </div>
          <Recentlyviewed />
          </div>
      <div className="p-[14px] max-w-screen-2xl border rounded-lg shadow bg-gray-800 border-gray-700"></div>
    </div>
    </>
  );
}
