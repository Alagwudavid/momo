"use client";
import Link from "next/link";
import Image from "next/image";

import randomIcon from "@/en/shared/icon/svg/add-square.svg";


const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 font-medium h-full w-[225px] p-4 bg-white overflow-y-auto">
      <span className="font-bold text-black text-lg">Filter Product</span>
      <div className="flex flex-col gap-2 w-full overflow-hidden">
      <span className="text-black text-base font-semibold">By Gender</span>
      <div className="flex flex-row flex-wrap justify-between gap-2 w-full overflow-hidden">
      <Link href="#" className="px-6 py-2 flex items-center rounded-md bg-black text-white">
          Male
        </Link>
      <Link href="#" className="px-6 py-2 flex items-center rounded-md bg-[#eae8ff]">
      Female
        </Link>
      <Link href="#" className="px-6 py-2 flex items-center rounded-md bg-[#eae8ff]">
      Unisex
        </Link>
      </div>
      </div>
      <div className="flex flex-col gap-2 mt-5 w-full overflow-hidden">
      <span className="text-black text-base font-semibold">By Price</span>
      <input type="number" name="price" autoComplete="off"
          className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
          placeholder="Enter Price"
      />
          <div className="flex flex-row gap-2 w-full overflow-hidden">
      <Link href="#" className="w-full px-2.5 py-1 flex flex-col rounded-md bg-[#eae8ff]">
      <span className="text-xs text-gray-400">Max Price</span>
      <span className="text-base">₦1,350</span>
        </Link>
      <Link href="#" className="w-full px-2.5 py-1 flex flex-col rounded-md text-white bg-black">
      <span className="text-xs text-gray-400">Max Price</span>
      <span className="text-base">₦100,000</span>
        </Link>
      </div>
      </div>
      <div className="flex flex-col gap-2 mt-5 w-full overflow-hidden">
      <span className="text-black text-base font-semibold">By Location</span>
      <div className="flex flex-row flex-wrap justify-between gap-2 w-full overflow-hidden">
      <Link href="#" className="px-6 py-2 flex items-center rounded-md bg-black text-white">
          Lagos
        </Link>
      <Link href="#" className="px-6 py-2 flex items-center rounded-md bg-[#eae8ff]">
      Enugu
        </Link>
      <Link href="#" className="px-6 py-2 flex items-center rounded-md bg-[#eae8ff]">
      Imo
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
