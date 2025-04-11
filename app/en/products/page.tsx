import React from "react";
import Image from "next/image";
import Link from "next/link";

import Sidebar from "@/en/shared/component/navigation/Sidebar";
import FeaturedProductsMasonry from "@/en/shared/component/layout/FeaturedProductsMasonry";
import { Offers } from "@/en/shared/constant/constants";

//ICONS
import ChevronDownIcon from "@/en/shared/icon/svg/chevron-down.svg";
import VerifiedIcon from "@/en/shared/icon/svg/check-badge-filled.svg";
import ChevronRightIcon from "@/en/shared/icon/svg/chevron-right.svg";
import ChevronLeftIcon from "@/en/shared/icon/svg/chevron-left.svg";
//END ICONS
export default function Home() {
  return (
    <>
      <aside
        className="bg-white sticky top-0 left-0 w-64 h-screen"
        aria-label="Sidebar"
      >
        <Sidebar />
      </aside>
      <div className="py-5 w-full px-4 overflow-x-auto overflow-y-auto h-full">
        <div className="max-w-screen-2xl">
          <div className="text-[20px] font-bold my-3 py-1 rounded text-black">
            Trending Products
          </div>
          <FeaturedProductsMasonry />

          <div className="w-full my-3 py-1 rounded flex justify-center">
            <button className="flex bg-[#eae8ff] text-[#1c284d] px-3 py-1 flex-row rounded-md items-center hover:bg-[#1c284d] hover:text-[#eae8ff]">
              Show more
              <Image src={ChevronDownIcon} alt="Icon" width={15} height={15} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
