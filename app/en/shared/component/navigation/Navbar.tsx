"use client";

import Search from "@/en/shared/component/search/SearchBar";
import Image from "next/image";
import Link from "next/link.js";

//ICONS
import UserSquareIcon from "@/en/shared/icon/svg/student-smiling-emoticon-square-face.svg";
import AppIcon from "@/en/shared/icon/svg/kiosk-text-black.svg";
import LoginIcon from "@/en/shared/icon/svg/login-outline.svg";
import SignUpIcon from "@/en/shared/icon/svg/user-add.svg";
import notificationIcon from "@/en/shared/icon/svg/bell-notification.svg";
//END ICONS

const Navbar = () => {
  return (
    <>
      <div className="bg-[#3572a5]">
        <div className="max-w-screen-2xl flex flex-row justify-between mx-auto text-[16px] py-4 px-5 sm:px-6 lg:px-8 h-[72px] border-b-[1px]">
          <Link href="/en" className="flex gap-1 justify-center items-center">
            <Image src={AppIcon} alt="Icon" width={85} height={30} />
          </Link>
          <div className="hidden sm:block">
            <Search />
          </div>
          <div className="flex">
            <ul className="flex flex-row gap-2">
              {/* <div className="hidden lg:flex flex-row gap-2 items-center justify-center border-[2px] border-[#eae8ff] rounded-full text-[#1c284d] font-semibold">
                <a
                  href="#"
                  className="flex flex-row gap-1 px-2 py-1 items-center justify-center"
                >
                  <Image src={SignUpIcon} alt="Icon" width={20} height={20} />
                  <span>Join</span>
                </a>
                <a
                  href="#"
                  className="flex flex-row gap-1 px-2 py-1 items-center justify-center bg-[#eae8ff] rounded-full"
                >
                  <Image src={LoginIcon} alt="Icon" width={20} height={20} />
                  <span>Login</span>
                </a>
              </div> */}
              <Link
                href="/home"
                className="flex mx-2 items-center justify-center relative"
              >
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-1">
            pro
          </span>
                {/* <svg
                className="w-6 h-6 text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="800px" height="800px" viewBox="0 0 24 24"
                >
                  <g id="Communication / Bell_Notification">
                  <path d="M12.1041 3C9.19982 3 6.9545 5.19595 6.9545 7.77444V10.2188C6.9545 10.5405 6.82228 10.8248 6.75338 10.9646C6.66384 11.1463 6.54677 11.339 6.42189 11.5279C6.17031 11.9084 5.83361 12.3536 5.47487 12.8035C5.01458 13.3809 4.91657 14.0494 5.0632 14.5627C5.20252 15.0504 5.56426 15.432 6.18153 15.5344C7.73816 15.7925 9.72824 16 12.1041 16C14.6551 16 16.6049 15.7608 18.0148 15.4803C18.5156 15.3806 18.8052 15.078 18.9304 14.6866C19.0641 14.2684 19.0172 13.7009 18.6805 13.1607C18.5187 12.9011 18.3448 12.6358 18.1696 12.3698C18.1517 12.3426 18.1337 12.3154 18.1158 12.2881C17.9607 12.0528 17.8045 11.8158 17.6653 11.5955C17.5119 11.3526 17.3627 11.1043 17.2493 10.8776C17.1607 10.7004 17 10.3623 17 10V7.71194C17 5.09322 14.9665 3 12.1041 3ZM4.9545 7.77444C4.9545 3.97465 8.21572 1 12.1041 1C16.0344 1 19 3.95238 19 7.71194V9.90173C19.0084 9.92117 19.0206 9.94809 19.0382 9.98326C19.1058 10.1185 19.212 10.2991 19.3562 10.5274C19.4843 10.7302 19.6294 10.9503 19.7865 11.1887C19.8041 11.2155 19.8219 11.2424 19.8398 11.2696C20.0148 11.5353 20.2013 11.8195 20.3779 12.1029C20.997 13.0963 21.1635 14.2698 20.8353 15.2959C20.4985 16.3489 19.6505 17.1941 18.4051 17.4418C16.8616 17.7489 14.7809 18 12.1041 18C9.61153 18 7.51187 17.7823 5.85433 17.5074C4.43291 17.2717 3.47981 16.3011 3.14013 15.1121C2.80778 13.9487 3.06663 12.6159 3.91105 11.5567C4.25624 11.1238 4.5503 10.7323 4.75351 10.4249C4.85168 10.2764 4.91666 10.1655 4.9545 10.0904V7.77444ZM4.98375 10.0249C4.98403 10.0248 4.98265 10.0291 4.97876 10.0385C4.98152 10.0297 4.98347 10.0251 4.98375 10.0249ZM15.7853 19.3808C16.1272 19.8145 16.0529 20.4433 15.6192 20.7852C13.578 22.3948 10.4432 22.4152 8.37995 20.7846C7.94666 20.4421 7.87301 19.8132 8.21546 19.3799C8.55791 18.9466 9.18678 18.873 9.62008 19.2154C10.9507 20.2671 13.0602 20.2561 14.3808 19.2148C14.8145 18.8728 15.4433 18.9471 15.7853 19.3808Z"/>
                  </g>
                </svg>
                <span className="top-0 left-4 absolute  w-3 h-3 bg-red-700 rounded-full"></span> */}
              </Link>

              <Link
                href="/en/account"
                className="flex flex-row gap-1 items-center justify-center"
              >
                <svg
                className="w-7 h-7 text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="800px" height="800px" viewBox="0 0 24 24"
                >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z" fill="#1C274C"/>
                </svg>
                {/* <svg
                className="w-6 h-6 text-slate-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="800px" height="800px" viewBox="0 0 103.696 103.696"
                >
                <g>
	<path d="M74.836,62.887c-3.843,8.887-12.843,14.629-22.928,14.629c-10.301,0-19.354-5.771-23.064-14.703
		c-0.636-1.529,0.089-3.285,1.62-3.92c0.376-0.156,0.766-0.23,1.15-0.23c1.176,0,2.292,0.695,2.771,1.85
		c2.777,6.686,9.655,11.004,17.523,11.004c7.689,0,14.527-4.321,17.421-11.01c0.658-1.521,2.424-2.223,3.944-1.564
		S75.494,61.366,74.836,62.887z M27.409,46.465h12.982c4.127,0,7.479-3.8,7.589-8.533h7.738c0.109,4.733,3.461,8.533,7.588,8.533
		h12.983c4.197,0,7.601-3.926,7.601-8.771v-0.409c0-4.844-3.403-8.771-7.601-8.771H63.307c-3.397,0-6.273,2.574-7.246,6.125h-8.423
		c-0.973-3.55-3.849-6.125-7.246-6.125H27.409c-4.197,0-7.6,3.926-7.6,8.771v0.409C19.809,42.538,23.211,46.465,27.409,46.465z
		 M58.707,37.286c0-3.182,2.063-5.771,4.601-5.771h12.981c2.536,0,4.601,2.589,4.601,5.771v0.409c0,3.182-2.063,5.771-4.601,5.771
		H63.307c-2.537,0-4.601-2.589-4.601-5.771V37.286z M22.809,37.286c0-3.182,2.063-5.771,4.6-5.771h12.982
		c2.536,0,4.6,2.589,4.6,5.771v0.409c0,3.182-2.063,5.771-4.6,5.771H27.409c-2.536,0-4.6-2.589-4.6-5.771V37.286z M30.384,37.489
		c0-1.769,1.435-3.204,3.203-3.204c1.768,0,3.204,1.435,3.204,3.204c0,1.771-1.435,3.205-3.204,3.205
		C31.818,40.694,30.384,39.26,30.384,37.489z M66.594,37.489c0-1.769,1.436-3.204,3.203-3.204s3.204,1.435,3.204,3.204
		c0,1.771-1.435,3.205-3.204,3.205C68.029,40.694,66.594,39.26,66.594,37.489z M85.467,103.696H18.23
		C8.179,103.696,0,95.518,0,85.467V18.23C0,8.178,8.179,0,18.23,0h67.235c10.053,0,18.23,8.178,18.23,18.23v67.235
		C103.697,95.518,95.518,103.696,85.467,103.696z M18.23,8.579c-5.321,0-9.651,4.33-9.651,9.651v67.235
		c0,5.321,4.33,9.651,9.651,9.651h67.235c5.321,0,9.651-4.33,9.651-9.651V18.23c0-5.321-4.33-9.651-9.651-9.651H18.23z"/>
</g>
              </svg> */}
                {/* <Image src={UserSquareIcon} alt="Icon" width={28} height={28} /> */}
                <div className="text-[14px] text-white">David</div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
