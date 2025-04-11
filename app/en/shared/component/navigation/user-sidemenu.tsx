"use client";
import Link from "next/link";
import Image from "next/image";

import addItemIcon from "@/en/shared/icon/svg/upload.svg";
import DashboardIcon from "@/en/shared/icon/svg/dashboard.svg";
import productIcon from "@/en/shared/icon/svg/cart.svg";
import EditIcon from "@/en/shared/icon/svg/pen-edit-line.svg";
import categoryIcon from "@/en/shared/icon/svg/category-solid.svg";
import ActivityIcon from "@/en/shared/icon/svg/activity.svg";
import messageIcon from "@/en/shared/icon/svg/messages-4.svg";
import shopIcon from "@/en/shared/icon/svg/shop-outline.svg";
import accountIcon from "@/en/shared/icon/svg/user-circle.svg";
import analyticsIcon from "@/en/shared/icon/svg/progress-report.svg";
import settingIcon from "@/en/shared/icon/svg/setting-gear.svg";
import LogoutIcon from "@/en/shared/icon/svg/logout.svg";
import AppIcon from "@/en/shared/icon/svg/kiosk-text-logo.svg";

const UserMenu = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-between sm:justify-normal font-medium w-[225px] h-screen p-4 bg-white">
      <div className="flex flex-col w-full overflow-hidden px-2 mb-2">
       <Image src={AppIcon} alt="Icon" width={100} height={40} />
      </div>
      <div className="flex flex-col w-full overflow-hidden gap-2">
      <div className="flex flex-row items-center gap-2 rounded-lg bg-[#eae8ff]">
                <div className="p-2 relative">
                  <Image
                    className="rounded-full shadow-lg ring-2 ring-gray-900"
                    width={40}
                    height={40}
                    src="/images/user-thumbnail-one.jpg"
                    alt="Acount image"
                  />
                <span className="bottom-2 right-2 absolute  w-3 h-3 bg-green-500 rounded-full ring-2 ring-gray-900"></span>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-sm font-semibold text-gray-900">
                    David Alagwu
                  </h5>
                  <div className="flex flex-row gap-1">
                  <span className="text-[12px] font-semibold px-2.5 py-0.5 w-fit rounded bg-[#ebd669] text-[#d18700] flex content-center">
            pro
          </span>
          <span className="text-[12px] font-semibold px-2.5 py-0.5 w-fit rounded bg-gray-400 text-gray-900 flex content-center">
            user
          </span>
          </div>
                </div>
      </div>
      <div className="flex flex-row gap-2 w-full overflow-hidden">
      <Link href="#" className="w-full px-2.5 py-2 flex flex-row items-center gap-2 rounded-lg bg-[#eae8ff]">
          <Image src={addItemIcon} alt="Icon" width={20} height={18} />
          Upload
        </Link>
      <Link href="#" className="w-full px-2.5 py-2 flex flex-row items-center gap-2 rounded-lg bg-[#eae8ff]">
          <Image src={EditIcon} alt="Icon" width={20} height={18} />
          Edit
        </Link>
      </div>
      </div>
      <div className="flex flex-col w-full rounded-lg bg-white overflow-hidden">
      <span className="font-bold text-[#1c274c] text-sm ms-1">MENU</span>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
     ">
          <Image src={categoryIcon} alt="Icon" width={20} height={18} />
          Categories
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
     ">
          <Image src={productIcon} alt="Icon" width={20} height={18} />
          Products
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
     ">
          <Image src={shopIcon} alt="Icon" width={20} height={18} />
          Stores
        </Link>
      </div>
      <div className="flex flex-col w-full overflow-hidden">
      <span className="font-bold text-[#1c274c] text-sm ms-1">ACCOUNT</span>
      <Link href="/en/dashboard" className="px-4 py-2 flex flex-row items-center gap-2
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
      ">
          <Image src={DashboardIcon} alt="Icon" width={20} height={18} />
          Dashboard
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2 relative
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
     ">
          <Image src={messageIcon} alt="Icon" width={20} height={18} />
          Messages{" "}
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-red-500 text-red-200 ms-1 absolute right-2">
            3
          </span>
        </Link>
        <Link href="/en/account" className="px-4 py-2 flex flex-row items-center gap-2
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
     ">
          <Image src={accountIcon} alt="Icon" width={20} height={18} />
          Account
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
     ">
          <Image src={ActivityIcon} alt="Icon" width={20} height={18} />
          Activity
        </Link>
        <Link href="#" className="px-4 py-2 flex flex-row items-center gap-2 relative
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
     ">
          <Image src={analyticsIcon} alt="Icon" width={20} height={18} />
          Analytics{" "}
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-1 absolute right-2">
            new
          </span>
        </Link>
        <Link href="/en/account-setting" className="px-4 py-2 flex flex-row items-center gap-2
      hover:bg-[#eae8ff] rounded-lg hover:transition-transform hover:duration-300 hover:ease-in-out
     ">
          <Image src={settingIcon} alt="Icon" width={20} height={20} />
          Setting
        </Link>
      </div>
      <div className="flex flex-col items-center w-full overflow-hidden px-2 mb-2 bg-[#eae8ff] rounded-lg">
        <Link href="/" className="py-2 flex flex-row items-center gap-2
     ">
          <Image src={LogoutIcon} alt="Icon" width={20} height={20} />
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
