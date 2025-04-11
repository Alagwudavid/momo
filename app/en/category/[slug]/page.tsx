"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Masonry from "react-masonry-css";
import Sidebar from "@/en/shared/component/navigation/Sidebar";
import NigerianNairaIcon from "@/en/shared/icon/svg/nigeria-naira-currency-symbol.svg";
import { categories, products, brands } from "@/en/shared/constant/constants";

//ICONS
//END ICONS
export default function CategorySlug() {
  const { slug } = useParams();
  const category = categories.find(
    (cat) =>
      cat.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === slug
  );
  if (!category) {
    return <p>Category not found</p>;
  }
  const categoryproducts = products.filter(
    (products) => products.categoryId === String(category.id)
  );

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    880: 2,
    500: 1,
  };
  return (
    <>
      <aside
        className="bg-white sticky top-0 left-0 w-56 h-screen"
        aria-label="Sidebar"
      >
        <Sidebar />
      </aside>
      <div className="w-full px-4 py-3 overflow-x-auto overflow-y-auto h-full">
        <div className="max-w-screen-2xl">
          <div className="text-[20px] font-bold my-3 py-1 rounded text-black">
          <div className="flex mb-3" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-black"
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
              </a>
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
                <span
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-black cursor-default"
                >
                  Category
                </span>
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
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {category.name}
                </span>
              </div>
            </li>
          </ol>
        </div>
            {category.name}
          </div>
          {categoryproducts.length > 0 ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {categoryproducts.map((products) => (
                <div
                  key={products.id}
                  className="mb-3 p-[6px] flex-shrink-0 shadow border-[1px] bg-white rounded-[8px] group overflow-hidden"
                >
                  <Link href={`/en/${products.name
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/ /g, "-")}`}>
                  <div className="w-full rounded-[8px] border-[1px] overflow-hidden relative">
                    <div className="bg-black opacity-[0.15] w-full h-full absolute top-0 right-0 z-[1]"></div>
                      <Image
                        src={products.bg}
                        alt="bg image"
                        className="images transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-row justify-between gap-1 py-2">
                    <div className="flex flex-col">
                      <div className="font-bold text-base capitalize">{products.name}</div>
                      <div className="text-sm text-gray-500">{products.storeName}</div>
                      </div>
                      <div className="flex flex-col justify-center text-xs text-right">
                          {products.oldPrice && (
                            <span className="text-red-500 line-through">
                              {products.oldPrice}
                            </span>
                          )}
                          <span className="text-base">{products.price}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Masonry>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="p-2 bg-yellow-400 border-2 border-yellow-600 rounded-lg">Sorry, no product has been added to this category yet</p>
              <div className="flex flex-col gap-3">
                <div className="font-bold capitalize text-lg">categories we think you will like:</div>
                <div className="flex flex-row flex-wrap gap-2 text-white">
                  {categories.map((category) => (
                    <div className="relative flex-shrink-0 text-white hover:bg-[#eae8ff]">
                      <Link
                        href={`/en/category/${category.name
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/ /g, "-")}`}
                         className="rounded-lg bg-black h-[100px] w-[125px] flex-shrink-0 p-3 flex items-center justify-center"
                      >
                        {category.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
              <div className="font-bold capitalize text-lg">suggested vendors:</div>
              <div className="flex flex-row space-x-2 text-white">
                <div className="rounded-lg bg-slate-800 w-[150px] flex-shrink-0 p-3 flex flex-col gap-2 items-center justify-center">
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">1</div>
                  <div className="flex flex-col items-center">
                    <span>David Alagwu</span>
                    <div className="flex flex-row gap-1"><span>35.4k</span><span>Available</span></div>
                    <Link className="px-3 py-2 mt-3 rounded-lg bg-black" href="#">Visit</Link>
                  </div>
                </div>
              </div>
              </div>
              <div className="flex flex-col gap-3">
              <div className="font-bold capitalize text-lg">Adverts</div>
              <div className="flex flex-row justify-between space-x-2 text-white">
                <div className="rounded-lg bg-black h-[250px] w-[250px] flex-shrink-0 p-3 flex items-center justify-center">1</div>
                <div className="rounded-lg bg-black h-[250px] w-[250px] flex-shrink-0 p-3 flex items-center justify-center">2</div>
                <div className="rounded-lg bg-black h-[250px] w-[250px] flex-shrink-0 p-3 flex items-center justify-center">3</div>
              </div>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </>
  );
}
