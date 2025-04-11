"use client";
import React, { useState } from "react";
import Image from "next/image";

//ICONS
import XMarkIcon from "@/en/shared/icon/svg/xmark.svg";
import CartIcon from "@/en/shared/icon/svg/cart.svg";
import PlusSquaredIcon from "@/en/shared/icon/svg/plus-square.svg";
import LinkCircleIcon from "@/en/shared/icon/svg/link-circle.svg";
import InfoSquareIcon from "@/en/shared/icon/svg/info-square.svg";
import AppBadgeFill from "@/en/shared/icon/svg/app-badge-fill.svg";
//END ICONS
export const categories = [
  { id: 1, name: "Sell on Kiosk", icon: PlusSquaredIcon },
  { id: 2, name: "Buy on Kiosk", icon: CartIcon },
  { id: 3, name: "Our apps", icon: AppBadgeFill },
  // { id: 4, name: "Kiosk", icon: InfoSquareIcon },
  { id: 5, name: "Support & Links", icon: LinkCircleIcon },
];

export const subcategories = [
  { id: "1", name: "For a verified store", categoryId: "1" },
  { id: "2", name: "For official stores", categoryId: "1" },
  { id: "3", name: "As a guest", categoryId: "2" },
  { id: "4", name: "As a verified user", categoryId: "2" },
  { id: "5", name: "Universities", categoryId: "3" },
  { id: "6", name: "Polytechnics", categoryId: "3" },
  { id: "7", name: "College", categoryId: "3" },
  { id: "8", name: "Legals", categoryId: "4" },
  { id: "9", name: "About-us", categoryId: "4" },
  { id: "10", name: "Help-Center", categoryId: "5" },
  { id: "11", name: "Support", categoryId: "5" },
  { id: "12", name: "Socials", categoryId: "5" },
];

export const coItems = [
  { id: "14", name: "Home", subcategoryId: "1" },
  { id: "15", name: "University of Lagos", subcategoryId: "5" },
  { id: "16", name: "Lagos poly", subcategoryId: "6" },
  { id: "17", name: "Poly", subcategoryId: "6" },
  { id: "18", name: "Others", subcategoryId: "6" },

  // Clothing & Accessories
  { id: "19", name: "Futo", subcategoryId: "7" },
  { id: "20", name: "Kano College", subcategoryId: "7" },
  { id: "21", name: "Private Poly", subcategoryId: "7" },

  // Food & Beverages
  { id: "34", name: "Facebook", subcategoryId: "12" },
  { id: "35", name: "Twitter", subcategoryId: "12" },
  { id: "36", name: "Youtube", subcategoryId: "12" },
  { id: "37", name: "Instagram", subcategoryId: "12" },
  { id: "37", name: "Whatsapp", subcategoryId: "12" },
];

const SubNavbarLarge = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  const handleCategoryClose = () => {
    setActiveCategoryId(null);
  };

  const filteredSubcategories = subcategories.filter(
    (child) => child.categoryId === activeCategoryId
  );

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <ul className="flex lg:space-x-4 overflow-x-auto">
          {categories.map((category) => (
            <li key={category.id} className="relative flex-shrink-0">
              <button
                onClick={() => handleCategoryClick(category.id.toString())}
                className="px-4 py-2 rounded-md flex flex-row gap-1 items-center justify-center"
              >
                <Image src={category.icon} alt="Icon" width={22} height={22} />
                <span className="text-[#1c284d]">{category.name}</span>
              </button>
              {activeCategoryId === category.id.toString() &&
                filteredSubcategories.length > 0 && (
                  <ul
                    className="fixed w-screen px-2 sm:px-8 py-5 lg:px-32 bg-white border border-gray-200 rounded-md shadow-lg z-10 dropdown-menu"
                    style={{
                      top: `${category.offsetTop + category.offsetHeight}px`,
                      left: 0,
                    }}
                  >
                    <button
                      onClick={handleCategoryClose}
                      className="p-2 bg-[#eae8ff] rounded-md fixed right-20"
                    >
                      <Image
                        src={XMarkIcon}
                        alt="Icon"
                        width={16}
                        height={16}
                      />
                    </button>
                    <div className="flex flex-row flex-wrap gap-3 justify-around">
                      {filteredSubcategories.map((subcategory) => {
                        const coItemsForSubcategory = coItems.filter(
                          (item) => item.subcategoryId === subcategory.id
                        );
                        return (
                          <li key={subcategory.id} className="relative">
                            <span className="mb-2 font-semibold">
                              {subcategory.name}
                            </span>
                            <hr />
                            {coItemsForSubcategory.length > 0 && (
                              <ul>
                                {coItemsForSubcategory.map((item) => (
                                  <li
                                    key={item.id}
                                    className="mb-1 font-normal"
                                  >
                                    {item.name}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubNavbarLarge;
