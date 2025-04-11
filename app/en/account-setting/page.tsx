import React from "react";
import Image from "next/image";

import { Offers } from "@/en/shared/constant/constants";
import UserMenu from "../shared/component/navigation/user-sidemenu";

//ICONS

//END ICONS
export default function Home() {
  return (
    <>
    <aside
        className="hidden sm:block sticky top-0 left-0 w-56 h-screen"
        aria-label="Sidebar"
      >
        <UserMenu />
      </aside>
    <div className="py-5 w-full px-4">
          <div className="px-[14px] py-3 max-w-screen-2xl rounded-lg mb-3 bg-green-300" style={{
            boxShadow: "rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px"
          }}>
            Welcome, dear user explore your dashboard and use all the features.
            <br />
            we value your feedback, click here
            </div>
      <div className="p-[14px] max-w-screen-2xl rounded-lg mb-3 bg-white shadow">
        <div className="flex flex-row">
          <div className="px-3">
            <Image
              className="rounded-full shadow-lg"
              width={100}
              height={100}
              src="/images/user-thumbnail-one.jpg"
              alt="Acoount image"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="mb-1 text-xl font-bold text-gray-900">
            Alagwu David
            </h5>
            <span className="text-sm text-gray-500">(Student)</span>
            <span className="text-sm text-gray-500">University of Nigeria, Nsukka, Enugu</span>

          </div>
        </div>
      </div>
      <div className="p-[14px] max-w-screen-2xl border rounded-lg shadow bg-gray-800 border-gray-700"></div>
    </div>
    </>
  );
}
