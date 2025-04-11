import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Offers } from "@/en/shared/constant/constants";
import UserMenu from "../shared/component/navigation/user-sidemenu";

//ICONS
import linkIcon from "@/en/shared/icon/svg/link-alt.svg";
import alertIcon from "@/en/shared/icon/svg/alert.svg";
//END ICONS
export default function Home() {
  return (
    <>
      <aside className="hidden sm:block sticky top-0 left-0 w-56 h-screen">
        <UserMenu />
      </aside>
      <div className="py-5 w-full px-4">
        <div className="relative max-w-screen-2xl h-[176px] border rounded-lg shadow bg-gray-800 border-gray-700 mb-3 overflow-hidden">
          <Image
            src="/images/shop-banner-one.jpg"
            className="images rounded-t-[8px]"
            alt="offer background"
            layout="fill"
            objectFit="cover"
          />
          <div className="bg-black opacity-[0.5] w-full h-full absolute top-0 right-0"></div>
          <div className="absolute top-0 right-1 flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-[14px] max-w-screen-2xl shadow-lg rounded-lg mb-3 bg-white">
          <div className="flex mb-3" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-400"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="#"
                    className="ms-1 text-sm font-medium md:ms-2 text-gray-400"
                  >
                    Store
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium md:ms-2 text-gray-400">
                    Samsung Official
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <div className="px-3">
                  <Image
                    className="rounded-lg shadow-lg"
                    width={70}
                    height={70}
                    src="/images/user-thumbnail-one.jpg"
                    alt="Acoount image"
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-1 text-xl font-semibold text-gray-900">
                    Samsung Official
                  </h5>
                  <Link
                    href="#"
                    className="text-sm text-black hover:text-blue-500 hover:underline flex flex-row gap-1"
                  >
                    <Image
                      src={linkIcon}
                      width={14}
                      height={14}
                      alt="link icon"
                    />
                    www.wynx.vercel.app
                  </Link>
                  

<div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="text-sm font-bold text-gray-900">4.95</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline">73 reviews</a>
</div>

                </div>
              </div>
                  <p className="py-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nostrum ex ullam consectetur. Omnis incidunt ullam architecto.
                  </p>
              <div className="flex mt-2">
                <Link
                  href="#"
                  className="inline-flex gap-1 items-center px-4 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Follow
                </Link>
                <Link
                  href="#"
                  className="px-4 py-1 ms-2 text-sm font-medium focus:outline-none rounded-lg border bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                >
                  Message
                </Link>
                <Link
                  href="#"
                  className="ps-4 py-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600 flex flex-row gap-1"
                >
                  <Image
                    src={alertIcon}
                    width={18}
                    height={18}
                    alt="link icon"
                  />
                  Report store
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[14px] max-w-screen-2xl border rounded-lg shadow bg-gray-800 border-gray-700">
          <article>
            <div className="flex items-center mb-4">
              <Image
                className="w-10 h-10 me-4 rounded-full"
                width={40}
                height={40}
                src="/images/user-thumbnail-one.jpg"
                alt=""
              />
              <div className="font-medium dark:text-white">
                <p>
                  Jese Leos{" "}
                  <time
                    dateTime="2014-08-16 19:00"
                    className="block text-sm text-gray-500 dark:text-gray-400"
                  >
                    Joined on August 2014
                  </time>
                </p>
              </div>
            </div>
            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                Thinking to buy another one!
              </h3>
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              <p>
                Reviewed in the United Kingdom on{" "}
                <time dateTime="2017-03-03 19:00">March 3, 2017</time>
              </p>
            </footer>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This is my third Invicta Pro Diver. They are just fantastic value
              for money. This one arrived yesterday and the first thing I did
              was set the time, popped on an identical strap from another
              Invicta and went in the shower with it to test the
              waterproofing.... No problems.
            </p>
            <Link
              href="#"
              className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more
            </Link>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              19 people found this helpful
            </p>
            <aside className="flex items-center mt-3">
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                <svg
                  className="w-3.5 h-3.5 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                </svg>
                Helpful
              </Link>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group ms-5"
              >
                <svg
                  className="w-3.5 h-3.5 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z" />
                </svg>
                Not helpful
              </Link>
            </aside>
          </article>
        </div>
      </div>
    </>
  );
}
