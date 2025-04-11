import Link from "next/link";
import Image from "next/image";
export default function VerifyReset () {
    return (
        <>
        <div className="hidden md:block bg-slate-300 relative">
        <Link href="/" className="absolute top-4 left-3 z-10">
        <Image
                src="/images/kiosk-text-white.svg"
                alt="Icon"
                width={80}
                height={25}
              />
        </Link>
        <div className="bg-black opacity-[0.5] w-full h-full absolute top-0 right-0"></div>
          <img
            src="/images/shop-banner-two.jpg"
            alt="background image of a customer shopping"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full overflow-y-auto p-2.5 relative flex flex-col gap-3 justify-center items-center">
        <div className="max-w-[420px] flex flex-col gap-3">
        <Link href="/" className="block md:hidden mt-6 mb-3">
        <Image
                src="/images/kiosk-text.svg"
                alt="Icon"
                width={80}
                height={25}
              />
        </Link>
        <div className="mb-3">
            <span className="text-3xl font-bold text-gray-900">Verify Reset!</span>
        </div>
        <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 mb-3">
            <Link href="/reset-password" className="w-[320px] flex flex-row flex-wrap items-center gap-3 px-3 py-2 rounded border-[1px] border-gray-900 bg-white">
            <Image
                    className="rounded-full shadow-lg ring-2 ring-gray-900"
                    width={30}
                    height={30}
                    src="/images/user-thumbnail-one.jpg"
                    alt="Acoount image"
                  />
            <div className="flex flex-col">
            <span className="font-bold text-gray-900">alagwudavid@gmail.com</span>
            <span className="text-xs text-slate-600">@AlagwuDavid</span>
            </div>
            </Link>
            </div>
            <div className="flex flex-col gap-1 mb-3">
            <label className="font-bold text-gray-900">Old Password</label>
            <input type="password" name="old-password" autoComplete="on" required
            className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
            placeholder="********"
            />
            </div>
            <div className="flex flex-col gap-1 mb-3">
            <label className="font-bold text-gray-900">New Password</label>
            <input type="password" name="new-password" autoComplete="off" required
            className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
            placeholder="********"
            />
            <input type="password" name="confirm-new-password" autoComplete="off" required
            className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
            placeholder="Confirm New Password"
            />
            </div>
            <button type="submit" className="flex flex-row flex-wrap justify-center font-semibold p-2 rounded bg-slate-900 text-white hover:bg-slate-800">
                Reset Password
            </button>
            <div className="w-full text-center">Or</div>
            <div className="flex flex-row justify-between gap-2">
            <Link href="/log-in" className="w-full flex flex-row flex-wrap justify-center font-semibold p-2 rounded bg-slate-900 text-white hover:bg-slate-800">
                Log-In
            </Link>
            <Link href="/create-account" className="w-full flex flex-row flex-wrap justify-center font-semibold p-2 rounded bg-slate-900 text-white hover:bg-slate-800">
                Sign-Up
            </Link>
            </div>
        </form>
        </div>
        </div>
        </>
     );
}