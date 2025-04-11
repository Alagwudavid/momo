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
            src="/images/shop-banner-three.jpg"
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
            <span className="text-3xl font-bold text-gray-900">Welcome back!</span>
            <p className="text-sm text-left text-gray-700">Login to continue shopping</p>
        </div>
        <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 mb-3">
            <label className="font-bold text-gray-900">Email Address</label>
            <input type="email" name="Email" autoComplete="on" required
            className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
            placeholder="example@email.com"
            />
            </div>
            <div className="flex flex-col gap-1 mb-3">
            <label className="font-bold text-gray-900">Password</label>
            <input type="password" name="Password" autoComplete="on" required
            className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
            placeholder="********"
            />
            </div>
            <div className="flex flex-row flex-wrap justify-between">
            <p className="text-sm flex flex-row gap-2 items-center"><input type="checkbox" name="Checkbox" className="h-4 w-4"></input> <span>Stay signed in</span></p>
            <Link href="/forgot-password" className="hover:text-blue-700 hover:underline text-sm">Forgot Password?</Link>
            </div>
            <button type="submit" className="flex flex-row flex-wrap justify-center font-semibold p-2 rounded-full mb-3 bg-slate-900 text-white hover:bg-slate-800">
                Login
            </button>
            <p className="text-sm">Don't have an account? <Link href="/create-account" className="text-blue-700 hover:underline">Register Now</Link></p>
            <Link href="/reset-password">reset password</Link>
        </form>
        </div>
        </div>
        </>
     );
}