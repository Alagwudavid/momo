import React from "react";
import Image from "next/image";
import Navbar from "@/shared/component/navigation/Navbar";
import VisitBtn from "@/shared/component/buttons/visitBtn"
import FeaturedProductsMasonry from '@/shared/component/layout/FeaturedProductsMasonry';

import {
  categories,
  FeaturedProducts,
  Offers,
} from "@/shared/constant/constants";
// import { ArrowDownIcon, SparklesIcon } from "@heroicons/react/24/outline";
import SidebarCategory from "@/shared/component/navigation/SidebarCategory";

//ICONS
import ChevronDownIcon from "@/shared/icon/svg/chevron-down.svg";
import VerifiedIcon from "@/shared/icon/svg/check-badge-filled.svg";
import NigerianNairaIcon from "@/shared/icon/svg/nigeria-naira-currency-symbol.svg";
// import {ReactComponent as MyDamnSvg} from '@/shared/icon/svg/nigeria-naira-currency-symbol.svg';
//END ICONS
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-2xl flex flex-row overflow-x-hidden overflow-y-hidden ">
        <div className="hidden sm:block min-w-[230px] bg-white">
          <SidebarCategory />
        </div>
        <div className="py-5 w-full px-4 bg-white overflow-x-auto overflow-y-auto h-full">
          <div className="max-w-screen-2xl block">
            <div className="w-full mb-2 flex flex-row justify-between">
              <span className="font-semibold text-[18px]">Shops we think you will love</span>
              <div className="flex flex-row rounded-md bg-[#eae8ff] p-1 gap-1 justify-center items-center">
                <button className="rounded-md bg-white p-3 h-7 w-7 flex justify-center items-center">&lt;</button>
                <button className="rounded-md bg-white p-3 h-7 w-7 flex justify-center items-center">{`>`}</button>
              </div>
            </div>
              <div className="flex flex-row gap-3 overflow-x-auto pb-[10px]">
              {Offers.map((offer) => (
                <a
                  href="#"
                  key={offer.id}
                  className="flex-shrink-0"
                >
                  <div className="flex flex-col justify-center rounded-[8px] border-[1px] border-[#eae8ff] hover:bg-[#eae8ff]">
                    <div className="relative w-[200px] h-[125px]">
                      <Image
                      src={offer.bg}
                      className="images rounded-t-[8px]"
                      alt="offer background"
                    />
                    </div>
                    <div className="px-2 py-1 w-[200px] h-[70px] rounded-b-[8px]">
                    <div className="flex flex-row gap-1">
                    <span className="text-black text-[16px]">{offer.name}</span>
                      <Image
                          src={VerifiedIcon}
                          alt="Icon"
                          width={18}
                          height={18}
                        />
                    </div>
                    <div className="flex flex-row">
                      <VisitBtn className='px-4 py-1 bg-[#635ef7] text-white rounded-lg font-bold'>visit</VisitBtn>
                    </div>
                    </div>
                  </div>
                </a>
              ))}  
              </div>
          </div>
          <div className="max-w-screen-2xl">
            <div className="w-full my-3 py-1 rounded bg-[#eae8ff] text-center">
              Trending Products
            </div>
            <FeaturedProductsMasonry />

            <div className="w-full my-3 py-1 rounded flex justify-center">
              <button className="flex bg-[#390278] text-white px-3 py-1 flex-row">
                Show more{" "}
                <Image
                  src={ChevronDownIcon}
                  alt="Icon"
                  width={25}
                  height={25}
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
