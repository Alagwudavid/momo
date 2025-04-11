"use client";
import Image from "next/image";
import Link from "next/link";

//ICONS
import sparklesIcon from "@/en/shared/icon/svg/magic-wand.svg";
import fireIcon from "@/en/shared/icon/svg/fire-filled.svg";
import recentIcon from "@/en/shared/icon/svg/recent.svg";
//END ICONS

const NavMenu = () => {
  return (
    <div className="flex flex-col items-center">
      <ul className="flex overflow-x-auto w-full">
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            <Image src={fireIcon} alt="Icon" width={20} height={18} />
            Trending
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            <Image src={sparklesIcon} alt="Icon" width={20} height={18} />
            Magic Deals
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            <Image src={recentIcon} alt="Icon" width={20} height={18} />
            Recently viewed
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="/en/products"
            target="_blank"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Supermarket
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Fashion
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Electronics
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Appliances
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Gadgets
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Health & Beauty
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Sporting items
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Home & Kitchen
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            Others
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
