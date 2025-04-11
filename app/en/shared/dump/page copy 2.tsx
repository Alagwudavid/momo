import React from "react";
import Image from "next/image";
import Link from "next/link";

import Sidebar from "@/en/shared/component/navigation/Sidebar";
import FeaturedProductsMasonry from "@/en/shared/component/layout/FeaturedProductsMasonry";
import { Offers } from "@/en/shared/constant/constants";
import Navbar from "@/en/shared/component/navigation/Navbar";
import Footer from "@/shared/component/footer/Footer";
import SubNavbarMobile from "@/en/shared/component/navigation/SubNavbarMobile";
import NavMenu from "@/en/shared/component/navigation/nav-menu";
//ICONS
import ChevronDownIcon from "@/en/shared/icon/svg/chevron-down.svg";
import VerifiedIcon from "@/en/shared/icon/svg/check-badge-filled.svg";
import ChevronRightIcon from "@/en/shared/icon/svg/chevron-right.svg";
import ChevronLeftIcon from "@/en/shared/icon/svg/chevron-left.svg";
//END ICONS
export default function Home() {
  return (
    <>
    
        <Navbar />
        
      <div className="sm:hidden block mx-auto py-2 max-w-screen-2xl px-4 bg-white border-[1px]">
        <SubNavbarMobile />
      </div>
      <div className="block mx-auto max-w-screen-2xl bg-[#fff] text-black font-semibold z-[1] shadow">
        <NavMenu />
      </div>
      <div className="py-5 w-full px-4 overflow-x-auto overflow-y-auto h-full">
        {/* <div className="max-w-screen-2xl block">
          <div className="w-full mb-2 flex flex-row justify-between">
            <span className="font-semibold text-[18px]">Popular Shops</span>
            <div className="flex flex-row rounded-md gap-1 justify-center items-center">
              <button className="rounded-md bg-[#eae8ff] h-7 w-7 flex justify-center items-center pr-1">
                <Image
                  src={ChevronLeftIcon}
                  alt="Icon"
                  width={24}
                  height={24}
                />
              </button>
              <button className="rounded-md bg-[#eae8ff] h-7 w-7 flex justify-center items-center pl-1">
                <Image
                  src={ChevronRightIcon}
                  alt="Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-3 overflow-x-auto pb-[10px]">
            {Offers.map((offer) => (
              <a href="#" key={offer.id} className="flex-shrink-0">
                <div className="flex flex-col justify-center rounded-[8px] border-[1px] bg-white border-[#eae8ff] hover:bg-[#eae8ff] group">
                  <div className="relative w-[200px] h-[125px] overflow-hidden rounded-t-[8px]">
                    <Image
                      src={offer.bg}
                      className="images rounded-t-[8px] group-hover:scale-110 transition-transform duration-300 ease-in-out transform"
                      alt="offer background"
                    />
                    <div className="bg-black opacity-[0.3] w-full h-full absolute top-0 right-0"></div>
                    <Image
                      src={offer.brandImage}
                      className="w-11 h-11 rounded-full absolute top-1/3 left-[41%]"
                      alt="brand logo"
                    />
                  </div>
                  <div className="px-2 py-1 w-[200px] h-[70px] rounded-b-[8px]">
                    <div className="flex flex-row gap-1">
                      <span className="text-black text-[16px] font-semibold">
                        {offer.name}
                      </span>
                      <Image
                        src={VerifiedIcon}
                        alt="Icon"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className="flex flex-row">
                      <Link
                        href="/en/business"
                        className="px-4 py-1 bg-[#635ef7] text-white rounded-lg font-bold"
                      >
                        visit
                      </Link>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div> */}
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
      <Footer />
    </>
  );
}
