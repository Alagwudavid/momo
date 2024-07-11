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
          <ul className="flex -space-x-4 rtl:space-x-reverse">
            <li className="bg-[#1c284d] text-[#eae8ff] px-4 py-2 rounded-full">
              A
            </li>
            <li className="bg-red-700 text-[#eae8ff] px-4 py-2 rounded-full">
              B
            </li>
            <li className="bg-blue-700 text-[#eae8ff] px-4 py-2 rounded-full">
              C
            </li>
            <li className="bg-green-700 text-[#eae8ff] px-4 py-2 rounded-full">
              D
            </li>
            <li
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-black border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +99
            </li>
          </ul>
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
