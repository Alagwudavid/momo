"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import NigerianNairaIcon from "@/en/shared/icon/svg/nigeria-naira-currency-symbol.svg";
import FireIcon from "@/en/shared/icon/svg/fire-filled.svg";

import { categories, products } from "@/en/shared/constant/constants";

const ProductsList = () => {
  // Define the breakpoints for the Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="p-[3px] mb-3 flex-shrink-0 hover:border-[2px] hover:bg-[#eae8ff] rounded-[8px] group"
        >
          <a href="#">
            <div className="w-full rounded-[8px] border-[1px] overflow-hidden relative">
              <Image
                src={product.bg}
                alt="bg image"
                className="images rounded-[8px] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-1 p-2">
              <div>{product.storeName}</div>
              <span className="font-bold">{product.name}</span>
              <div className="flex justify-between">
                <span className="flex flex-row gap-[2px] items-center justify-center">
                  <Image
                    src={NigerianNairaIcon}
                    alt="Icon"
                    width={16}
                    height={16}
                  />
                  {product.price}
                </span>
                <div
                  className="bg-[#ec1212] text-[#eae8ff] rounded px-1 py-1 text-[10px] flex-row flex-wrap items-center"
                  style={{ display: product.offer ? "flex" : "none" }}
                >
                  <span>{product.offer}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </Masonry>
  );
};

export default ProductsList;