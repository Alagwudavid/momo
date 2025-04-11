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
      <div className="px-5 py-6 lg:px-8 bg-black text-white h-auto">
        <div className="max-w-screen-2xl flex flex-col gap-3 max-sm:grid-cols-footer mx-auto text-[16px] h-auto">
          <div className="flex flex-row justify-between cursor-default w-full flex-wrap mb-2">
            <Image
              src="/images/kiosk-text-white.svg"
              alt="Icon"
              width={70}
              height={30}
            />
            <div className="text-[16px] flex flex-row flex-wrap gap-2 items-center">
              Powered by
              <Link href="https://wynx.vercel.app">
                <Image
                  src="/images/wynx.svg"
                  alt="wynxIcon"
                  width={60}
                  height={30}
                  className="-mb-1"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3">
            <div className="h-full">
              <div className="font-bold text-[#f2f2f2] mb-2">About</div>
              <div className="text-gray-300 flex flex-col gap-1">
                <Link href="#">Contact Us</Link>
                <Link href="#">own a kiosk</Link>
                <Link href="#">Help Center</Link>
                {/* <Link href="#">Purchase Orders</Link> */}
              </div>
            </div>
            <div className="h-full flex flex-col gap-1">
              <span className="font-bold mb-1">Our Apps</span>
              <Link href="#"
                className="bg-black text-white px-3 py-2 rounded-md ml-[2px] max-w-[137px] border-[1px] border-gray-600 flex flex-row items-center gap-2"
              >
                <svg className="w-6 h-6 text-gray-600" 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 30 30">
                <path d="M17.929 17.32 4.183 30.982q.103.014.223.014c.335 0 .648-.09.918-.247l-.009.005 16.65-9.422zm0-2.583L22 10.691 5.315 1.249a1.8 1.8 0 0 0-1.193-.223l.01-.001zM2.675 2.159c-.089.209-.14.452-.14.707v26.272c0 .269.057.525.16.756l-.005-.012 13.94-13.855zm25.844 15.463-4.897 2.772-4.393-4.365 4.427-4.4 4.862 2.752a1.863 1.863 0 0 1 .009 3.237z"/>
                </svg>
                <div className="flex flex-col">
                <span className="text-[.6em]">Download from</span>
                <span className="text-[.8em]">Google Play</span>
                </div>
              </Link>
              <Link href="#"
                className="bg-black text-white px-3 py-2 rounded-md ml-[2px] max-w-[137px] border-[1px] border-gray-600 flex flex-row items-center gap-2"
              >
                <svg className="w-6 h-6 text-gray-600" 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 30 30">
                <path d="M30.62 20.419a1.84 1.84 0 0 0-.96-.672l-.013-.003a2.5 2.5 0 0 0-.555-.088h-.006c-.21-.012-.419-.011-.629-.011h-4.15l-5.485-9.768a5.06 5.06 0 0 0-1.343 2.718l-.004.029a5.8 5.8 0 0 0 .697 3.778l-.015-.028 6.591 11.738c.105.187.209.374.324.554.107.172.224.32.355.456l-.001-.001c.275.28.639.471 1.046.528l.01.001a1.78 1.78 0 0 0 1.159-.242l-.008.005c.349-.211.618-.523.771-.894l.005-.012a1.9 1.9 0 0 0 .142-.728q-.001-.255-.062-.49l.003.014a2.7 2.7 0 0 0-.213-.558l.007.015c-.094-.193-.2-.379-.305-.565l-1.52-2.707h1.994c.21 0 .419.001.628-.011q.304-.014.578-.092l-.018.004c.4-.117.735-.355.97-.671l.003-.005c.235-.316.376-.714.376-1.144s-.141-.829-.38-1.15l.004.005zM4.894 24.175l-.99 1.875c-.102.194-.205.387-.298.588a3 3 0 0 0-.197.544l-.004.02a2.13 2.13 0 0 0 .086 1.267l-.005-.015c.15.395.414.719.751.939l.007.005a1.65 1.65 0 0 0 1.135.246l-.009.001a1.75 1.75 0 0 0 1.031-.549l.001-.001q.192-.21.339-.46l.007-.013c.113-.188.214-.382.317-.576l1.436-2.72a3.035 3.035 0 0 0-3.628-1.145l.021-.007zm7.118-4.527 7.636-13.792c.105-.189.21-.377.305-.573.081-.157.151-.34.201-.531l.004-.019a1.98 1.98 0 0 0-.088-1.234l.005.013a1.9 1.9 0 0 0-.767-.914l-.008-.005a1.75 1.75 0 0 0-1.16-.239l.009-.001a1.8 1.8 0 0 0-1.055.535v.001q-.196.205-.347.449l-.007.012c-.115.183-.219.372-.324.561l-.483.872-.483-.872c-.105-.189-.208-.379-.323-.561a2.7 2.7 0 0 0-.355-.462l.001.001a1.8 1.8 0 0 0-1.045-.535l-.01-.001a1.76 1.76 0 0 0-1.158.245l.008-.004a1.9 1.9 0 0 0-.771.906l-.005.013c-.09.219-.142.472-.142.738q.001.258.062.496l-.003-.014c.055.21.125.393.213.566l-.007-.016c.094.195.2.384.305.573l1.56 2.817-6.076 10.975H3.54c-.209 0-.419-.001-.628.012a2.5 2.5 0 0 0-.578.094l.018-.004c-.401.119-.735.36-.969.68l-.004.005c-.235.321-.376.724-.376 1.159s.141.838.38 1.165l-.004-.006c.237.325.571.566.959.681l.013.003c.165.048.357.08.554.089h.006c.209.012.419.011.628.011h16.367c.045-.093.087-.205.121-.321l.004-.016a2.742 2.742 0 0 0-2.539-3.553h-.004z"/>
                </svg>
                <div className="flex flex-col">
                <span className="text-[.6em]">Download from</span>
                <span className="text-[.85em]">App Store</span>
                </div>
              </Link>
            </div>
            <div className="h-full">
              <div className="font-bold text-[#f2f2f2] mb-2">Legal & Policies</div>
              <div className="text-gray-300 flex flex-col gap-1">
                <Link href="#">Terms of Service</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Return Policy</Link>
                <Link href="#">Tax Policy</Link>
              </div>
            </div>
            <div className="h-full">
              <div className="font-bold text-[#f2f2f2] mb-2">Socials</div>
              <div className="text-gray-300 flex flex-col gap-1">
                <Link href="#">X(twitter)</Link>
                <Link href="#">Instagram</Link>
                <Link href="#">Whatsapp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;