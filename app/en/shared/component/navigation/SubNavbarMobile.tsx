"use client";
import Link from "next/link.js";
import Image from "next/image";
import MenuIcon from "@/en/shared/icon/svg/bars-staggered.svg";

import Search from "@/en/shared/component/search/SearchBar";
const SubNavbarMobile = () => {
  return (
    <div className="flex flex-row justify-between">
      <Link
        href="/en/menu"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-300 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <Image src={MenuIcon} alt="Icon" width={30} height={30} />
      </Link>
      <Search />
    </div>
  );
};

export default SubNavbarMobile;
