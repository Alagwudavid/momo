"use client";
import Link from "next/link";

const MajorLinks = () => {
  return (
    <ul className="flex flex-row gap-2 rounded-full justify-between">
      <li className="px-4 py-1 flex items-center justify-center hover:bg-[#eae8ff] rounded-full">
        <Link href="/">Home</Link>
      </li>
      <li className="px-4 py-1 flex items-center justify-center hover:bg-[#eae8ff] rounded-full hover:transition-transform hover:duration-300 hover:ease-in-out">
        <Link href="/en/" target="_blank">
          Shop
        </Link>
      </li>
      <li className="px-4 py-1 flex items-center justify-center hover:bg-[#eae8ff] rounded-full hover:transition-transform hover:duration-300 hover:ease-in-out">
        <Link href="/news">News</Link>
      </li>
      <li className="px-4 py-1 flex items-center justify-center hover:bg-[#eae8ff] rounded-full hover:transition-transform hover:duration-300 hover:ease-in-out">
        <Link href="/about">About</Link>
      </li>
      <li className="px-4 py-1 flex items-center justify-center hover:bg-red-400 rounded-full hover:transition-transform hover:duration-300 hover:ease-in-out">
        <Link href="/loader">Loader</Link>
      </li>
    </ul>
  );
};

export default MajorLinks;
