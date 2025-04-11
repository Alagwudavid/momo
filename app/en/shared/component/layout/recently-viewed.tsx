import Link from "next/link";

const Recentlyviewed = () => {
    return ( 
        <div className="grid grid-cols-4 gap-3 flex-wrap">
        <div className="py-5 px-3 rounded-lg bg-white shadow flex flex-col items-center justify-center gap-2">
                <div className="text-4xl font-bold">Office</div>
        </div>
        <div className="py-5 px-3 rounded-lg  bg-white shadow flex flex-col items-center justify-center gap-2">
                <div className="text-4xl font-bold">Supermarket</div>
        </div>
        <div className="py-5 px-3 rounded-lg  bg-white shadow flex flex-col items-center justify-center gap-2">
                <div className="text-4xl font-bold">Kitchen</div>
        </div>
        <Link href="#" className="py-5 px-3 rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 shadow flex flex-col items-center justify-center gap-2">
                <div className="text-3xl font-bold">View All</div>
                <div className="flex text-2xl rounded-full py-1 px-3 bg-[#f2f2f2]">{">"}</div>
        </Link>
      </div>
     );
}
 
export default Recentlyviewed;