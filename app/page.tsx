import Image from "next/image";
import "@/shared/styles/HomeLayout.css";
import Link from "next/link";
import LandingPage from "./shared/component/layout/LandingPage.jsx";
import ServicePage from "./shared/component/layout/ServicePage.jsx";

export default function Home() {
  return (
    <>
      <section className="sm:px-[46px] px-3">
        <LandingPage />
        <ServicePage />
        <div className="mx-auto my-6 max-w-screen-2xl block py-4 px-0">
          <div className="text-[32px] text-center font-semibold">
            Trending Vendors and their products
          </div>
          <div className="md:hidden inline-block overflow-x-scroll scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 inline-cont-pro">
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
            <div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></div>
          </div>
          <div className="md:grid hidden grid-fr-3_4">
            <div className="bg-slate-700 rounded grid-row-1_2 grid-col-2_3"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
            <div className="bg-slate-400 rounded grid-fr-items"></div>
          </div>
        </div>
        <div className="mx-auto my-6 max-w-screen-2xl block py-4 px-0">
          <div className="text-[32px] text-center font-semibold">
            Our Services
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-[24px] items-center justify-center">
            <div className="bg-black rounded w-full h-[400px]"></div>
            <div className="bg-black rounded w-full h-[400px]"></div>
            <div className="bg-black rounded w-full h-[400px]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
