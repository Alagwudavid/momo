"use client";
import "@/shared/styles/HomeLayout.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/shared/json/AnimationOne.json";

export default function LandingPage() {
  return (
    <div className="mx-auto my-[48px] max-w-screen-lg min-h-[500px] flex flex-col sm:grid sm:grid-cols-2">
      <div className="py-4 flex flex-col items-center sm:items-start justify-center">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/momo-long-text-logo.svg"
          alt="momo icon logo"
          width={170}
          height={50}
        />
        <motion.h1
          className="md:text-[42px] text-[30px] font-bold leading-10 my-5 sm:text-left text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          Welcome to your one-stop online marketplace!
        </motion.h1>
        <motion.div
          className="text-[24px] sm:text-left text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          Join millions of vendors and help us unlock e-commerce opportunities
          for students.
        </motion.div>
        <motion.div
          className="my-5"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <div className="flex -space-x-4 rtl:space-x-reverse relative">
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#1c284d]"
              />
            </Link>
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#1c284d]"
              />
            </Link>
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#1c284d]"
              />
            </Link>
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#1c284d]"
              />
            </Link>
            <Link className="hover:-mt-2 transition-all duration-300" href="#">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Icon"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#1c284d]"
              />
            </Link>
            <Link
              className="hover:-mt-2 transition-all duration-300 flex items-center justify-center w-[50px] h-[50px] text-xs font-medium text-white bg-black rounded-full hover:bg-gray-600"
              href="#"
            >
              2m+
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center relative">
        <Lottie
          animationData={animationData}
          loop={true}
          // width={300}
          // height={300}
        />
      </div>
    </div>
  );
}
