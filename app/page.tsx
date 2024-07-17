import Image from "next/image";
import "@/shared/styles/HomeLayout.css";
import Link from "next/link";
import LandingPage from "./shared/component/layout/LandingPage.jsx";
import ServicePage from "./shared/component/layout/ServicePage.jsx";
import FeaturedLayout from "./shared/component/layout/FeaturedLayout.jsx";

export default function Home() {
  return (
    <>
      <section className="sm:px-[46px] px-3">
        <LandingPage />
        <ServicePage />
        <FeaturedLayout />
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
