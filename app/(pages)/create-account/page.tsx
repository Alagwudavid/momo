import Link from "next/link";
import Image from "next/image";
export default function CreateAccount () {
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
            src="/images/shop-banner-six.jpg"
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
            <span className="text-3xl font-bold text-gray-900">Start Shopping at Kiosk!</span>
            <p className="text-sm text-left text-gray-700">Create new account</p>
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
            <label className="font-bold text-gray-900">Create Password</label>
            <input type="password" name="create-password" autoComplete="on" required
            className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
            placeholder="********"
            />
            <input type="password" name="confirm-password" autoComplete="off" required
            className="h-[40px] w-full overflow-hidden rounded-md border border-solid text-[#1c284d] p-2 bg-white focus:outline-none text-[14px]"
            placeholder="Confirm password"
            />
            </div>
            <div className="flex flex-col gap-1 mb-3">
            <label className="font-bold text-gray-900">Select role</label>
            <div className="flex flex-row flex-wrap justify-between gap-2">
            <div className="w-full px-2.5 py-2 flex flex-row items-center gap-3 cursor-pointer rounded bg-[#eae8ff] hover:bg-slate-700 hover:text-white">
            <input type="radio" value="" name="customer" className="h-4 w-4"></input> 
                Customer
            </div>
            <div className="w-full px-2.5 py-2 flex flex-row items-center gap-3 cursor-pointer rounded bg-[#eae8ff] hover:bg-slate-700 hover:text-white">
            <input type="radio" value="" name="vendor" className="h-4 w-4"></input> 
                Vendor
            </div>
            </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between">
            <button type="reset">Reset form</button>
            <Link href="/forgot-password" className="hover:text-blue-700 hover:underline text-sm">Forgot Password?</Link>
            </div>
            <button type="submit" className="flex flex-row flex-wrap justify-center font-semibold py-2.5 px-2 rounded mb-3 bg-slate-900 text-white hover:bg-slate-800">
                Create Account
            </button>
            <p className="text-sm">Have an account? <Link href="/log-in" className="text-blue-700 hover:underline">Login</Link></p>
        </form>
        </div>
        </div>
        </>
     );
}