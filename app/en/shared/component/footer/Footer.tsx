"use client";
import Image from "next/image";
import Link from "next/link.js";

//ICONS
import UserSquareIcon from "@/shared/icon/svg/student-smiling-emoticon-square-face.svg";
import AppIcon from "@/shared/icon/svg/AppIcon.svg";
//END ICONS

const Footer = () => {
  return (
    <>
      <div className="mx-auto my-4 max-w-screen-2xl px-5 sm:px-6 lg:px-8 bg-white text-black h-auto">
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 mx-auto text-[16px] h-auto">
          <div className="flex flex-col items-center cursor-default sm:w-[240px]">
            <div className="flex flex-row items-center justify-start cursor-default gap-2 w-full">
              <Image src={AppIcon} alt="Icon" width={24} height={24} />
              <div className="text-[16px] sm:text-[34px] font-bold text-black">
                momo
              </div>
            </div>
            <div className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              doloribus voluptatem fuga nam incidunt.
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-full">
              <span className="font-bold">About</span>
              </div>
            <div className="h-full flex flex-col gap-2">
              <span className="font-bold">Our Apps</span>
              <Image
                src="/images/google-play_banner.png"
                alt="Icon"
                width={140}
                height={40}
              />
              <Image
                src="/images/ios_banner.png"
                alt="Icon"
                width={140}
                height={40}
              />
              <Link
                href="/"
                className="bg-black text-white px-3 py-2 rounded-md ml-[2px] mr-[10px] flex flex-row gap-2"
              >
                <span>Momo.app</span>
                <Image
                  src="/images/chevron-right-circle.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className="h-full">
              <span className="font-bold">Socials</span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
