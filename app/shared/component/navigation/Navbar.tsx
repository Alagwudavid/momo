"use client";

import SubNavbarLarge from "./SubNavbarLarge.jsx";
import SubNavbarMobile from "./SubNavbarMobile";
import Search from "@/shared/component/search/SearchBar";
import Image from "next/image";

//ICONS
import UserSquareIcon from "@/shared/icon/svg/student-smiling-emoticon-square-face.svg";
import AppIcon from "@/shared/icon/svg/AppIcon.svg";
import LoginIcon from "@/shared/icon/svg/login-outline.svg";
import SignUpIcon from "@/shared/icon/svg/user-add.svg";
//END ICONS

const Navbar = () => {
  return (
    <>
      <div className="mx-auto py-4 max-w-screen-2xl px-5 sm:px-6 lg:px-8 bg-white h-[72px]">
        <div className="flex flex-row justify-between mx-auto text-[16px]">
          <div className="flex justify-center items-center cursor-default gap-1">
          <Image
                          src={AppIcon}
                          alt="Icon"
                          width={30}
                          height={30}
                        />
            <div className="text-[16px] sm:text-[26px] font-bold text-[#5534eb]">
              Marketplace
            </div>
          </div>
          <div className="hidden sm:block">
            <Search />
          </div>
          <div>
            <ul className="flex flex-row gap-2 items-center justify-center">
              <div className="hidden lg:flex flex-row gap-2 items-center justify-center border-[2px] border-[#eae8ff] rounded-full text-[#1c284d] font-semibold">
              <a href="#" className="flex flex-row gap-1 px-3 py-2 items-center justify-center">
              <Image
                  src={SignUpIcon}
                  alt="Icon"
                  width={28}
                  height={28}
                  />
                  <span>Join</span>
              </a>
              <a href="#" className="flex flex-row gap-1 px-3 py-2 items-center justify-center bg-[#eae8ff] rounded-full">
                  <Image
                  src={LoginIcon}
                  alt="Icon"
                  width={28}
                  height={28}
                  />
                  <span>Login</span>
              </a>
              </div>
              <a
                href="#"
                className="flex flex-row gap-1 p-2 rounded-lg hover:bg-slate-100 items-center justify-center"
              >
                <Image
                  src={UserSquareIcon}
                  alt="Icon"
                  width={28}
                  height={28}
                />
                <span className="text-[18px]">David</span>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:hidden block mx-auto py-2 max-w-screen-2xl px-4 bg-white border-[1px]">
        <SubNavbarMobile />
      </div>
      <div className="hidden sm:block mx-auto py-2 max-w-screen-2xl px-4 bg-[#fff] text-black font-semibold border-[1px]">
        <SubNavbarLarge />
      </div>
    </>
    // <h1>Navbar</h1>
  );
};

export default Navbar;
