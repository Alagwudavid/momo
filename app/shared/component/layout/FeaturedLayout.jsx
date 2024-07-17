"use client";
import "@/shared/styles/HomeLayout.css";
import Link from "next/link";
import { motion } from "framer-motion";
// import ArrowRightIcon from "";

export default function FeaturedLayout() {
  return (
    <div className="mx-auto my-6 max-w-screen-2xl block py-4 px-0">
      <div className="text-[32px] text-center font-semibold">
        Trending Vendors and their products
      </div>
      <div className="md:hidden inline-block overflow-x-scroll scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 inline-cont-pro">
        <motion.div className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"
        ></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"
        ></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"
        ></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"
        ></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"
        ></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"
        ></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"
        ></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-white flex-item-pro rounded grid-fr-items layer3-shadow"
        ></motion.div>
      </div>
      <div className="md:grid hidden grid-fr-3_4">
        <div className="bg-white rounded grid-row-1_2 grid-col-2_3">
          <img
            src="/images/Magic-banner1.jpg"
            alt="Icon"
            className="rounded object-cover w-full h-full"
          />
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-slate-400 rounded grid-fr-items overflow-hidden relative"
        >
          <div className="bg-black opacity-[0.5] w-full h-full absolute top-0 right-0"></div>
          <img
            src="/images/shop-banner-one.jpg"
            alt="Icon"
            className="rounded object-cover w-full h-full"
          />
          <div className="flex flex-row gap-2 absolute bottom-2 left-2 items-center">
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={40}
                height={40}
                className=" rounded-full p-1 ring-2 ring-gray-300"
              />
            </Link>
            <div className="flex flex-col font-bold text-white">
              <Link className="text-[14px]" href="#">
                Mr.Beast.com
              </Link>
              <span className="text-[11px] flex flex-row items-center gap-1">
                <img src="/icon/like.svg" alt="Icon" width={16} height={16} />
                (59)
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-slate-400 rounded grid-fr-items overflow-hidden relative"
        >
          <div className="bg-black opacity-[0.5] w-full h-full absolute top-0 right-0"></div>
          <img
            src="/images/shop-banner-two.jpg"
            alt="Icon"
            className="rounded object-cover w-full h-full"
          />
          <div className="flex flex-row gap-2 absolute bottom-2 left-2 items-center">
            <Link
              className="hover:-mt-2 transition-all duration-300 relative"
              href="#"
            >
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={40}
                height={40}
                className=" rounded-full p-1 ring-2 ring-gray-300"
              />
              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-700 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </Link>
            <div className="flex flex-col font-bold text-white">
              <Link className="text-[14px] flex flex-row gap-1" href="#">
                LG Official
                <img
                  src="/icon/check-badge-filled.svg"
                  alt="Icon"
                  width={18}
                  height={18}
                />
              </Link>
              <span className="text-[11px] flex flex-row items-center">
                <img src="/icon/star-circle.svg" alt="Icon" width={16} height={16} />
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-1">5.0</span>
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-slate-400 rounded grid-fr-items overflow-hidden relative"
        >
          <div className="bg-black opacity-[0.5] w-full h-full absolute top-0 right-0"></div>
          <img
            src="/images/shop-banner-three.jpg"
            alt="Icon"
            className="rounded object-cover w-full h-full"
          />
          <div className="flex flex-row gap-2 absolute bottom-2 left-2 items-center">
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={40}
                height={40}
                className=" rounded-full p-1 ring-2 ring-gray-300"
              />
            </Link>
            <div className="flex flex-col font-bold text-white">
              <Link className="text-[14px]" href="#">
                Rugged Luxury
              </Link>
              <span className="text-[11px] flex flex-row items-center gap-1">
                <img src="/icon/like.svg" alt="Icon" width={16} height={16} />
                (59)
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-slate-400 rounded grid-fr-items overflow-hidden relative"
        >
          <div className="bg-black opacity-[0.5] w-full h-full absolute top-0 right-0"></div>
          <img
            src="/images/shop-banner-four.jpg"
            alt="Icon"
            className="rounded object-cover w-full h-full"
          />
          <div className="flex flex-row gap-2 absolute bottom-2 left-2 items-center">
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={40}
                height={40}
                className=" rounded-full p-1 ring-2 ring-gray-300"
              />
            </Link>
            <div className="flex flex-col font-bold text-white">
              <Link className="text-[14px]" href="#">
                Spark TM
              </Link>
              <span className="text-[11px] flex flex-row items-center gap-1">
                <img src="/icon/like.svg" alt="Icon" width={16} height={16} />
                (59)
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-slate-400 rounded grid-fr-items overflow-hidden relative"
        >
          <div className="bg-black opacity-[0.5] w-full h-full absolute top-0 right-0"></div>
          <img
            src="/images/shop-banner-five.jpg"
            alt="Icon"
            className="rounded object-cover w-full h-full"
          />
          <div className="flex flex-row gap-2 absolute bottom-2 left-2 items-center">
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={40}
                height={40}
                className=" rounded-full p-1 ring-2 ring-gray-300"
              />
            </Link>
            <div className="flex flex-col font-bold text-white">
              <Link className="text-[14px]" href="#">
                Luxury Store
              </Link>
              <span className="text-[11px] flex flex-row items-center gap-1">
                <img src="/icon/like.svg" alt="Icon" width={16} height={16} />
                (59)
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-slate-400 rounded grid-fr-items overflow-hidden relative"
        >
          <div className="bg-black opacity-[0.5] w-full h-full absolute top-0 right-0"></div>
          <img
            src="/images/shop-banner-six.jpg"
            alt="Icon"
            className="rounded object-cover w-full h-full"
          />
          <div className="flex flex-row gap-2 absolute bottom-2 left-2 items-center">
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={40}
                height={40}
                className=" rounded-full p-1 ring-2 ring-gray-300"
              />
            </Link>
            <div className="flex flex-col font-bold text-white">
              <Link className="text-[14px] flex flex-row gap-1" href="#">
                Kith Storefront
                <img
                  src="/icon/check-badge-filled.svg"
                  alt="Icon"
                  width={18}
                  height={18}
                />
              </Link>
              <span className="text-[11px] flex flex-row items-center gap-1">
                <img src="/icon/like.svg" alt="Icon" width={16} height={16} />
                (59)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
