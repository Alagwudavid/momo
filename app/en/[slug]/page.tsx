"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Masonry from "react-masonry-css";
import Sidebar from "@/en/shared/component/navigation/Sidebar";
import { categories, products, brands } from "@/en/shared/constant/constants";
import profileImage from "@/en/shared/image/user-thumbnail_3.jpg"

//ICONS
//END ICONS
export default function ProductSlug() {
  const { slug } = useParams();
  const product= products.find(
    (cat) =>
      cat.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === slug
  );
  if (!product) {
    return (
      <>
      <div
        className="bg-white sticky top-0 left-0 w-56 h-screen hidden sm:block"
        aria-label="Sidebar"
      >
        <Sidebar />
      </div>
      <div className="w-full px-4 h-full">
        <div className="flex flex-col gap-2 p-3">
              <p className="p-2 bg-yellow-400 border-2 border-yellow-600 rounded-lg">"{slug}" not found</p>
              <div className="flex flex-col gap-3">
                <div className="font-bold capitalize text-lg">categories we think you will like:</div>
                <div className="flex flex-row space-x-2 text-white">
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">1</div>
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">2</div>
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">3</div>
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">4</div>
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">5</div>
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">6</div>
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">7</div>
                  <div className="rounded-lg bg-black h-[100px] w-[100px] flex-shrink-0 p-3 flex items-center justify-center">8</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
              <div className="font-bold capitalize text-lg">suggested vendors:</div>
              <div className="flex flex-row space-x-2 text-white">
                <div className="rounded-lg bg-slate-800 w-[200px] flex-shrink-0 p-3 flex flex-col gap-2 items-center justify-center">
                  <div className="rounded-lg bg-black h-[50px] w-[50px] flex-shrink-0 p-3 flex items-center justify-center">1</div>
                  <div className="flex flex-col items-center">
                    <span>David Alagwu</span>
                    <span>35.4k followers</span>
                    <Link href="#">visit</Link>
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
      </div>
    </>
  );
  }
  const viewproducts = products.filter(
    (products) => String(product.id)
  );

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    880: 2,
    500: 1,
  };
  return (
    <>
      <div
        className="bg-white sticky top-0 left-0 w-56 h-screen hidden sm:block"
        aria-label="Sidebar"
      >
        <Sidebar />
      </div>
      <div className="w-full px-4 overflow-y-auto h-full bg-white">
        <div className="max-w-screen-2xl flex flex-col gap-1 py-4">
        <div className="grid grid-cols-1 grid-cols-300-auto">
          <div className="flex flex-col sm:flex-row md:mb-2 mb-4">
            <div className="sm:max-w-[400px] p-1 ring-2 ring-gray-700 rounded-xl border-[1px] overflow-hidden group mb-3 md:mb-0 mr-3">
                        <Image
                          src={product.bg}
                          alt="bg image"
                          className="rounded-xl images transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
            </div>
            <div className="flex flex-row md:flex-col md:flex-nowrap flex-wrap gap-2 mr-3">
            <div className="w-[100px] h-[100px] p-1 hover:ring-2 hover:ring-gray-700 rounded-xl border-[1px] overflow-hidden relative group">
                      <div className="bg-black opacity-[0.1] w-full h-full absolute top-0 right-0 z-[1] cursor-pointer"></div>
                        <Image
                          src={product.bg}
                          alt="bg image"
                          className="rounded-xl images transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
            </div>
            <div className="w-[100px] h-[100px] p-1 hover:ring-2 hover:ring-gray-700 rounded-xl border-[1px] overflow-hidden relative group">
                      <div className="bg-black opacity-[0.1] w-full h-full absolute top-0 right-0 z-[1] cursor-pointer"></div>
                        <Image
                          src={product.bg}
                          alt="bg image"
                          className="rounded-xl images transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
            </div>
            <div className="w-[100px] h-[100px] p-1 hover:ring-2 hover:ring-gray-700 rounded-xl border-[1px] overflow-hidden relative group">
                      <div className="bg-black opacity-[0.1] w-full h-full absolute top-0 right-0 z-[1] cursor-pointer"></div>
                        <Image
                          src={product.bg}
                          alt="bg image"
                          className="rounded-xl images transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
            </div>
            <div className="w-[100px] h-[100px] p-1 hover:ring-2 hover:ring-gray-700 rounded-xl border-[1px] overflow-hidden relative group">
                      <div className="bg-black opacity-[0.1] w-full h-full absolute top-0 right-0 z-[1] cursor-pointer"></div>
                        <Image
                          src={product.bg}
                          alt="bg image"
                          className="rounded-xl images transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
            </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col flex-wrap gap-2 mr-3">
            <div className="text-2xl font-bold text-black">
              {product.name}
            </div>
            <div className="flex flex-row gap-2 text-base">
              <span className="font-bold">{product.price}</span>
                            {product.oldPrice && (
                              <span className="text-red-500 line-through">
                                {product.oldPrice}
                              </span>
                            )}
            </div>
              {product.color && (
              <div className="text-base text-black flex flex-row items-center gap-1">
              Item color: <div className="flex flex-row items-center gap-1"><span className={`w-4 h-4 block bg-${product.colorCode} rounded py-0 px-2`}></span>{" "}{product.color}</div>
              </div>
              )}
            <div className="grid grid-cols-auto-40 gap-2">
              <Link href="#add-to-wishlist" className="flex flex-row flex-wrap justify-center font-semibold px-4 py-2 rounded bg-[#3572a5] text-white hover:bg-[#175f9a]">
                  Add to wishlist
              </Link>
              <Link href="#call-seller" className="flex flex-row flex-wrap justify-center font-semibold px-4 py-2 rounded text-black bg-white border border-slate-900">
                Chat
              </Link>
              <Link href="#call-seller" className="flex flex-row flex-wrap justify-center font-semibold px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700">
                Call
              </Link>
            </div>
            <Link href="#buy-now" className="w-full flex flex-row flex-wrap justify-center font-semibold px-4 py-2 rounded bg-black text-white hover:bg-slate-900">
                Buy Now
            </Link>
            <div className="flex flex-row justify-between gap-2">
            <Link href="#review-product" className="text-green-700">Review Product</Link>
            <Link href="#report-product" className="text-red-500 underline">Report Product!</Link>
            </div>
            <div className="flex flex-col flex-wrap">
                <div className="flex flex-row">
                <div className="relative p-2">
                  <Image
                    className="rounded-full shadow-lg ring-2 ring-gray-900"
                    width={40}
                    height={40}
                    src={profileImage}
                    alt="Acount image"
                  />
                <span className="bottom-2 right-2 absolute  w-3 h-3 bg-green-500 rounded-full ring-2 ring-gray-900"></span>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold text-black flex flex-row gap-1 items-center">Indigo Stores
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                  <div className="text-sm text-black">Lagos, Nigeria
                  </div>
                  <span className="w-1 h-1 bg-black rounded-full"></span>
                  <div className="text-sm text-black">Computer/IT
                  </div>
                </div>
                </div>
                </div>
                <ul className="gap-0 ml-7">
                  <li className="li-circle">Respond Score: Quick</li>
                  <li className="li-circle">Order Fulfilment Rate: Excellent</li>
                  <li className="li-circle">Quality Score: Good</li>
                  <li className="li-circle">Customer Rating: Good</li>
                </ul>
                <Link href="#follow" className="flex flex-row justify-center font-semibold px-4 py-2 rounded bg-black text-white hover:bg-slate-900">
                  Follow
              </Link>
              </div>      
              <div className="flex flex-row items-center justify-between">
              </div>
            </div>
            <div>
              <div className="text-base uppercase font-bold border-b-slate-900 border-b text-black">
                Product details
              </div>
              <div className="flex flex-col gap-2 p-1">
            <div className="text-base font-bold text-[#3572a5]">
              Description:
            </div>
            <span className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eligendi veritatis a hic aspernatur veniam repellendus alias commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className="flex flex-col gap-2 p-1">
            <div className="text-base font-bold text-[#3572a5]">
              Key Features:
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.brand && (
            <div className="flex flex-col">
              <div className="text-base font-bold text-black">Brand</div>
              <span>{product.brand}</span>
            </div>
              )}
              {product.model && (
            <div className="flex flex-col">
              <div className="text-base font-bold text-black">Model</div>
              <span>{product.model}</span>
            </div>
              )}
              {product.condition && (
            <div className="flex flex-col">
              <div className="text-base font-bold text-black">Condition</div>
              <span>{product.condition}</span>
            </div>
              )}
            {product.discount && (
            <div className="flex flex-col">
              <div className="text-base font-bold text-black">Discount</div>
              <span>{product.discount}</span>
            </div>
            )}
            {product.color && (
            <div className="flex flex-col">
              <div className="text-base font-bold text-black">Color</div>
              <div className="flex flex-row items-center gap-1"><span className={`w-4 h-4 block bg-${product.colorCode} rounded py-0 px-2`}></span>{" "}{product.color}</div>
            </div>
            )}
            {product.warranty && (
            <div className="flex flex-col">
              <div className="text-base font-bold text-black">Warranty</div>
              <span>{product.warranty}</span>
            </div>
            )}
            </div>
            </div>
            <div className="flex flex-col gap-2 p-1">
            <div className="text-base font-bold text-[#3572a5]">
              Delivery Option:
            </div>
            <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <div className="text-base font-bold text-black">By</div>
              <span>Seller</span>
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold text-black">Location</div>
              <span>Lagos</span>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col flex-wrap gap-1 mr-3">
            <div className="flex flex-row justify-between flex-wrap gap-2">
            <div className="text-base font-bold text-black">Latest feedback on seller:
            </div>
            <Link href="#view-all" className="text-red-500 underline mr-3">view all</Link>
            </div>
            <div className="flex flex-row gap-2 text-base">
              <span className="font-bold">x x x x</span>
              <span>
                                204 Reviews
                              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col flex-wrap rounded-lg bg-slate-200 px-3 py-2">
            <div className="text-lg font-bold text-black">
            Emmanuel Edgar 
            </div>
            <div className="flex flex-col gap-2">
            <span className="">Love the product, thank you for all the industry's in hope and light.</span>
            </div>
            <div className="flex flex-row gap-2 text-sm">
            <p className="text-green-700 text-sm">12/05/24</p>
            <Link href="#report-product" className="text-red-500 underline">Like</Link>
            </div>
            </div>
            <div className="flex flex-col flex-wrap rounded-lg bg-slate-200 px-3 py-2">
            <div className="text-lg font-bold text-black">
            Emmanuel Edgar 
            </div>
            <div className="flex flex-col gap-2">
            <span className="">Love the product, thank you for all the industry's in hope and light.</span>
            </div>
            <div className="flex flex-row gap-2 text-sm">
            <p className="text-green-700 text-sm">12/05/24</p>
            <Link href="#report-product" className="text-red-500 underline">Like</Link>
            </div>
            </div>
            </div>
            </div>
        <div className="grid grid-cols-2 gap-1 mr-3">
            <div className="flex flex-col flex-wrap rounded-lg bg-slate-200 px-3 py-2 mr-3">
              Safety tips
            </div>
            <div className="flex flex-col flex-wrap rounded-lg bg-slate-200 px-3 py-2 mr-3">
              Promotion
            </div>
        </div>
          </div>
          <div className="bg-blue-200 p-2 mt-3 rounded-lg">
            More products like this
          </div>
        </div>
      </div>
    </>
  );
}
