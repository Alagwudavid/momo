"use client"
import Link from "next/link.js";
import Image from "next/image";
import MenuIcon from "@/en/shared/icon/svg/bars-staggered.svg";

import Search from '@/en/shared/component/search/SearchBar';
  const SubNavbarMobile = () => {
  return (
      <div className="flex flex-row justify-between">
        <button
      // onClick={handleCategoryClose}
      className="sm:hidden block text-black"
    >
      <Link
                href="/"
                className="flex mx-2 items-center justify-center"
              >
                <Image src={MenuIcon} alt="Icon" width={30} height={30} />
              </Link>
    </button>
            <Search />
      </div>
    );
  };
  
  export default SubNavbarMobile;