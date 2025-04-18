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
import settingIcon from "@/en/shared/icon/svg/setting-gear.svg";

const MenuPage = () => {
  
  return (
    <>
      <div className="flex flex-col border-[1px] rounded-lg mt-5 bg-white min-w-[197px]">
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={addItemIcon} alt="Icon" width={20} height={18} />
          Add item
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={fireIcon} alt="Icon" width={20} height={18} />
          Trending
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={sparklesIcon} alt="Icon" width={20} height={18} />
          Latest Deals
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={recentIcon} alt="Icon" width={20} height={18} />
          Recently viewed
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
      <div className="flex flex-col border-[1px] rounded-lg mt-5 bg-white min-w-[197px]">
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={accountIcon} alt="Icon" width={20} height={18} />
          Account
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2">
          <Image src={settingIcon} alt="Icon" width={20} height={20} />
          Setting
        </Link>
      </div>
      <div className="relative border-[1px] rounded-lg mt-5 px-6 py-2 text-[14px] block text-center bg-white min-w-[197px]">
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
        <ul className="flex flex-row flex-wrap gap-1 items-center justify-center">
          <li className="hover:underline">About</li>
          <span className="bg-gray-400 p-[2px] rounded-full h-[2px]"></span>
          <li className="hover:underline">Legal</li>
          <span className="bg-gray-400 p-[2px] rounded-full h-[2px]"></span>
          <li className="hover:underline">Advertise</li>
        </ul>
      </div>
    </>
  );
};

export default MenuPage;
