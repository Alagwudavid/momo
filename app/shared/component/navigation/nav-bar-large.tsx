"use client";
import Image from "next/image";

//ICONS
import LoginIcon from "@/shared/icon/svg/login-outline.svg";
import SignUpIcon from "@/shared/icon/svg/user-add.svg";
import Link from "next/link";
import NavbarMobile from "./nav-bar-mobile";
import MajorLinks from "./MajorLinks";
//END ICONS

const Navbar = () => {
  return (
    <>
      <div className="mx-auto py-4 max-w-screen-xl px-5 lg:px-7 block">
        <div className="md:grid md:grid-cols-3 flex flex-row flex-wrap justify-between mx-auto text-[16px]">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/kiosk-text.svg"
                alt="Icon"
                width={80}
                height={25}
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-row gap-1 items-center justify-center font-semibold">
            <MajorLinks />
          </div>
          <div className="flex flex-row gap-2 items-center justify-end p-1 text-[#1c284d] font-semibold">
            <Link
              href="/create-account"
              className="flex flex-row gap-1 px-2 py-1 items-center justify-center"
            >
              <Image src={SignUpIcon} alt="Icon" width={20} height={20} />
              <span>Join</span>
            </Link>
            <Link
              href="/log-in"
              className="flex flex-row gap-1 px-2 py-1 items-center justify-center bg-[#eae8ff] rounded-full"
            >
              <Image src={LoginIcon} alt="Icon" width={20} height={20} />
              <span>Login</span>
            </Link>
          </div>
        </div>
        <div className="md:hidden flex flex-row gap-1 my-3 items-center justify-center font-semibold">
          <NavbarMobile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
