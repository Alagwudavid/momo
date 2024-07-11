"use client";

import SubNavbarLarge from "./SubNavbarLarge.jsx";
import SubNavbarMobile from "./SubNavbarMobile";
import Search from "@/en/shared/component/search/SearchBar";
import Image from "next/image";
import Link from "next/link.js";

//ICONS
import UserSquareIcon from "@/en/shared/icon/svg/student-smiling-emoticon-square-face.svg";
import AppIcon from "@/en/shared/icon/svg/momologo-marketplace.svg";
import LoginIcon from "@/en/shared/icon/svg/login-outline.svg";
import SignUpIcon from "@/en/shared/icon/svg/user-add.svg";
import CartIcon from "@/en/shared/icon/svg/cart.svg";
//END ICONS

const Navbar = () => {
  return (
    <>
      <div className="mx-auto py-4 max-w-screen-2xl px-5 sm:px-6 lg:px-8 bg-white h-[72px] border-b-[1px]">
        <div className="flex flex-row justify-between mx-auto text-[16px]">
          <div className="flex justify-center items-center cursor-default">
            <Image src={AppIcon} alt="Icon" width={162} height={35} />
          </div>
          <div className="hidden sm:block">
            <Search />
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex flex-row gap-2">
              <div className="hidden lg:flex flex-row gap-2 items-center justify-center border-[2px] border-[#eae8ff] rounded-full text-[#1c284d] font-semibold">
                <a
                  href="#"
                  className="flex flex-row gap-1 px-2 py-1 items-center justify-center"
                >
                  <Image src={SignUpIcon} alt="Icon" width={20} height={20} />
                  <span>Join</span>
                </a>
                <a
                  href="#"
                  className="flex flex-row gap-1 px-2 py-1 items-center justify-center bg-[#eae8ff] rounded-full"
                >
                  <Image src={LoginIcon} alt="Icon" width={20} height={20} />
                  <span>Login</span>
                </a>
              </div>
              <Link
                href="/home"
                className="flex mx-2 items-center justify-center"
              >
                <Image src={CartIcon} alt="Icon" width={30} height={30} />
              </Link>

              <Link
                href="/home"
                className="flex flex-row gap-1 items-center justify-center"
              >
                <Image src={UserSquareIcon} alt="Icon" width={28} height={28} />
                <span className="text-[18px]">David</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:hidden block mx-auto py-2 max-w-screen-2xl px-4 bg-white border-[1px]">
        <SubNavbarMobile />
      </div>
      <div
        className="hidden sm:block mx-auto py-2 max-w-screen-2xl px-4 bg-[#fff] text-black font-semibold z-[1] relative"
        style={{
          boxShadow: `rgba(0, 0, 0, 0.12) 0px 4px 12px 0px`,
        }}
      >
        <SubNavbarLarge />
      </div>
    </>
    // <h1>Navbar</h1>
  );
};

export default Navbar;
