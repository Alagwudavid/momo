"use client";
import "@/shared/styles/HomeLayout.css";
import Link from "next/link";
import { motion } from "framer-motion";
// import ArrowRightIcon from "";

export default function ServicePage() {
  return (
    <div className="mx-auto my-20 sm:px-8 rounded-3xl max-w-screen-xl sm:h-[430px] flex flex-col sm:grid sm:grid-cols-2 bg-black text-white">
      <div className="flex flex-col items-center sm:items-start justify-center">
        <motion.h1
          // className="md:text-[42px] text-[30px] font-bold leading-10 my-5 sm:text-left text-center"
          className="text-4xl font-bold bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 bg-clip-text text-transparent hover:bg-gradient-to-bl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          Bringing e-commerce closer to you.
        </motion.h1>
        <motion.p
          className="text-[24px] sm:text-left text-center mb-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          We are here to make e-commerce easier and more cost-effective for{" "}
          <span className="font-semibold underline text-green-400 decoration-green-400 decoration-wavy cursor-default">
            students
          </span>{" "}
          in Nigeria.
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Link
            href={"/en"}
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 gap-2 flex flex-row"
          >
            Shop now
            <img
              src="/icon/right-md.svg"
              alt="Icon"
              width={26}
              height={20}
              // className=""
            />
          </Link>
        </motion.div>
      </div>
      <div className="flex items-center justify-center relative">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/laptop-frame-transparent.png"
          alt="Icon"
          width={580}
          height={600}
        />
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          src="/images/mobile-frame-2.png"
          alt="Icon"
          width={240}
          height={600}
          className="absolute top-3 sm:top-[28%] right-2"
        />
      </div>
    </div>
  );
}
