"use client";
import Link from "next/link";
import Image from "next/image";

import addItemIcon from "@/en/shared/icon/svg/add-square.svg";
import sparklesIcon from "@/en/shared/icon/svg/sparkles.svg";
import fireIcon from "@/en/shared/icon/svg/fire-filled.svg";
import recentIcon from "@/en/shared/icon/svg/recent.svg";
import productIcon from "@/en/shared/icon/svg/cart-shopping-fast.svg";
import categoryIcon from "@/en/shared/icon/svg/category-solid.svg";
import shopIcon from "@/en/shared/icon/svg/shop-outline.svg";
import accountIcon from "@/en/shared/icon/svg/user-circle.svg";
import analyticsIcon from "@/en/shared/icon/svg/progress-report.svg";
import settingIcon from "@/en/shared/icon/svg/setting-gear.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center font-medium">
      <div className="flex flex-col border-[1px] rounded-lg mt-5 bg-[#eae8ff] min-w-[197px]">
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={addItemIcon} alt="Icon" width={20} height={18} />
          Add item
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={productIcon} alt="Icon" width={20} height={18} />
          Products
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={categoryIcon} alt="Icon" width={20} height={18} />
          Categories
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={shopIcon} alt="Icon" width={20} height={18} />
          Stores
        </Link>
      </div>
      <div className="flex flex-col border-[1px] rounded-lg mt-5 bg-[#eae8ff] min-w-[197px]">
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={accountIcon} alt="Icon" width={20} height={18} />
          Account
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={analyticsIcon} alt="Icon" width={20} height={18} />
          Analytics{" "}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-1">
            pro
          </span>
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={settingIcon} alt="Icon" width={20} height={20} />
          Setting
        </Link>
      </div>
      <div className="relative border-[1px] rounded-lg mt-5 px-6 py-2 text-[14px] block text-center bg-[#eae8ff] min-w-[197px]">
        <div className="relative">&copy;2024 name llc,</div>
        <span>
          by{" "}
          <a
            href="https://www.wynx.vercel.app"
            className="hover:text-[#390278]"
          >
            wynx softwares llc
          </a>
        </span>
        <ul className="flex flex-row flex-wrap gap-1 items-center">
          <li className="hover:underline">About</li>
          <span className="bg-gray-400 p-[2px] rounded-full h-[2px]"></span>
          <li className="hover:underline">Legal</li>
          <span className="bg-gray-400 p-[2px] rounded-full h-[2px]"></span>
          <li className="hover:underline">Advertise</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
