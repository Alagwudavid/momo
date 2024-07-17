"use client";
import Link from "next/link";
import Image from "next/image";

import SignUpIcon from "@/shared/icon/svg/shop-outline.svg";
import NewsIcon from "@/shared/icon/svg/news.svg";
import InfoIcon from "@/shared/icon/svg/info-square.svg";

const MajorLinks = () => {
  return (
    <ul className="flex flex-row gap-0 sm:gap-1 rounded-full justify-between">
      <li className="px-2 py-1 sm:px-4 sm:py-1 flex items-center justify-center hover:bg-[#eae8ff] rounded-full hover:transition-transform hover:duration-300 hover:ease-in-out">
        <Link
          href="/en/"
          target="_blank"
          className="flex flex-row gap-1 px-2 py-1 items-center justify-center"
        >
          <Image src={SignUpIcon} alt="Icon" width={24} height={16} />
          Shop
        </Link>
      </li>
      <li className="px-2 py-1 sm:px-4 sm:py-1 flex items-center justify-center hover:bg-[#eae8ff] rounded-full hover:transition-transform hover:duration-300 hover:ease-in-out">
        <Link
          href="/news"
          className="flex flex-row gap-1 px-2 py-1 items-center justify-center"
        >
          <Image src={NewsIcon} alt="Icon" width={24} height={16} /> News
        </Link>
      </li>
      <li className="px-2 py-1 sm:px-4 sm:py-1 flex items-center justify-center hover:bg-[#eae8ff] rounded-full hover:transition-transform hover:duration-300 hover:ease-in-out">
        <Link
          href="/about"
          className="flex flex-row gap-1 px-2 py-1 items-center justify-center"
        >
          <Image src={InfoIcon} alt="Icon" width={24} height={16} /> About
        </Link>
      </li>
      <li className="px-2 py-1 sm:px-4 sm:py-1 flex items-center justify-center hover:bg-red-400 rounded-full hover:transition-transform hover:duration-300 hover:ease-in-out">
        <Link
          href="/loader"
          className="flex flex-row gap-1 px-2 py-1 items-center justify-center"
        >
          <Image src="/icon/spinner.svg" alt="Icon" width={24} height={16} />{" "}
          Loader
        </Link>
      </li>
    </ul>
  );
};

export default MajorLinks;
