import Link from "next/link";

const Magicdeals = () => {
    return ( 
        <div className="grid grid-cols-2 gap-3 justify-between flex-wrap">
        <div className="py-5 px-3 rounded-2xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 shadow flex flex-col items-center justify-center gap-2">
                <div className="text-xl">Welcome back to school</div>
                <div className="text-4xl font-bold">50% Off</div>
                <div className="text-xl">on specific vendors</div>
                <Link href="#" className="rounded-lg p-2 bg-white">Get Discount</Link>
        </div>
        <div className="py-5 px-3 rounded-2xl bg-gradient-to-r from-blue-200 via-green-300 to-blue-200 shadow flex flex-col items-center justify-center gap-2">
                <div className="text-xl">Black friday deals</div>
                <div className="text-4xl font-bold">10% Off</div>
                <div className="text-xl">use discount code</div>
                <Link href="#" className="rounded-lg p-2 bg-white">KIOSK10</Link>
        </div>
      </div>
     );
}
 
export default Magicdeals;