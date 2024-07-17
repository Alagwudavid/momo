"use client";
import Image from "next/image";
import Link from "next/link.js";
import "@/shared/styles/Footer.css";

//ICONS
import UserSquareIcon from "@/shared/icon/svg/student-smiling-emoticon-square-face.svg";
import AppIcon from "@/shared/icon/svg/AppIcon.svg";
//END ICONS

const Footer = () => {
  return (
    <>
      <div className="mx-auto my-4 mt-[46px] max-w-screen-2xl px-5 sm:px-6 lg:px-8 bg-white text-black h-auto">
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-footer mx-auto text-[16px] h-auto">
          <div className="flex flex-col cursor-default sm:w-[240px]">
            <Image
              src="/images/momo-text-icon.svg"
              alt="Icon"
              width={130}
              height={40}
            />
            <div className="text-[16px] mt-2 flex flex-row flex-wrap gap-1">
              We are here to make <br /> e-commerce easier and <br /> cost
              effective for Students in Africa.
            </div>
            <div className="text-[16px] mt-3 flex flex-row gap-2 items-center">
              Powered by
              <Link href="https://wynx.vercel.app">
                <Image
                  src="/images/wynx.svg"
                  alt="wynxIcon"
                  width={70}
                  height={30}
                  className="-mb-1"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3">
            <div className="h-full">
              <span className="font-bold">About</span>
              <ul>
                <li>Contact Us</li>
                <li>Sale on Momo</li>
                <li>Help Center</li>
                {/* <li>Purchase Orders</li> */}
              </ul>
            </div>
            <div className="h-full flex flex-col gap-1">
              <span className="font-bold mb-1">Our Apps</span>
              <Image
                src="/images/google-play_banner.png"
                alt="Icon"
                width={140}
                height={40}
              />
              <Image
                src="/images/ios_banner.png"
                alt="Icon"
                width={140}
                height={40}
              />
              <Link
                href="/"
                className="bg-black text-white px-3 py-2 rounded-md ml-[2px] max-w-[137px] flex flex-row justify-between gap-2"
              >
                <span>Web</span>
                <Image
                  src="/images/chevron-right-circle.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className="h-full">
              <span className="font-bold">Legal & Policies</span>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Return Policy</li>
                <li>Tax Policy</li>
              </ul>
            </div>
            <div className="h-full">
              <span className="font-bold">Socials</span>
              <ul>
                <li>X(twitter)</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
