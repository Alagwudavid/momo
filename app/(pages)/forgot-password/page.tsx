import Link from "next/link";
import Image from "next/image";
export default function Login () {
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
            src="/images/shop-banner-four.jpg"
            alt="background image of a customer shopping"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-screen overflow-auto p-2.5 relative flex flex-col gap-3 justify-center items-center">
        <div className="max-w-[420px] flex flex-col gap-3">
        <Link href="/" className="block md:hidden mb-3">
        <Image
                src="/images/kiosk-text.svg"
                alt="Icon"
                width={80}
                height={25}
              />
        </Link>
        <div className="mb-3">
            <span className="text-3xl font-bold text-gray-900">Forgot Password!</span>
            <p className="text-sm text-left text-gray-700">If E-mail is linked to an account,<br /> you will receive and link in you mailbox</p>
        </div>
        <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 mb-3">
            <label className="font-bold text-gray-900">E-mail Address</label>
            <input type="email" name="Email" autoComplete="on" required
            className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
            placeholder="example@email.com"
            />
            </div>
            <Link href="/verify-password-reset">verify reset</Link>
            <button type="submit" className="flex flex-row flex-wrap justify-center font-semibold p-2 rounded bg-slate-900 text-white hover:bg-slate-800">
                Send Link
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