"use client";
import Image from "next/image";
import Link from "next/link";

//ICONS
import XMarkIcon from "@/en/shared/icon/svg/xmark.svg";
import CartIcon from "@/en/shared/icon/svg/cart.svg";
import PlusSquaredIcon from "@/en/shared/icon/svg/plus-square.svg";
import LinkCircleIcon from "@/en/shared/icon/svg/link-circle.svg";
import InfoSquareIcon from "@/en/shared/icon/svg/info-square.svg";
import AppBadgeFill from "@/en/shared/icon/svg/app-badge-fill.svg";
//END ICONS

const NavMenu = () => {
  return (
    <div className="flex flex-col items-center">
      <ul className="flex lg:px-5 overflow-x-auto w-full">
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            {/* <Image src="/" alt="Icon" width={22} height={22} /> */}
            Trending
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            {/* <Image src="/" alt="Icon" width={22} height={22} /> */}
            Latest Deals
          </Link>
        </li>
        <li className="relative flex-shrink-0 text-[#1c284d] hover:bg-[#eae8ff]">
          <Link
            href="#"
            className="px-4 py-2 flex flex-row gap-1 items-center justify-center"
          >
            {/* <Image src="/" alt="Icon" width={22} height={22} /> */}
            Recently viewed
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
