"use client";
import "@/shared/styles/HomeLayout.css";
import Link from "next/link";
import { motion } from "framer-motion";
// import ArrowRightIcon from "";

export default function ServicePage() {
  return (
    <div className="mx-auto my-[48px] max-w-screen-lg min-h-[500px] flex flex-col sm:grid sm:grid-cols-2">
      <div className="py-4 flex flex-col items-center sm:items-start justify-center">
        <motion.h1
          className="md:text-[42px] text-[30px] font-bold leading-10 my-5 sm:text-left text-center"
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
          Bringing The Producers Closer to you.
        </motion.h1>
        <motion.div
          className="text-[24px] sm:text-left text-center"
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
          We are here to make e-commerce easier and more cost-effective for
          students in Africa.
        </motion.div>
        <motion.div
          className="my-5"
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
            className="bg-[#eae8ff] text-[#1c284d] font-semibold px-4 py-2 rounded-md gap-2 flex flex-row min-w-[150px]"
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
