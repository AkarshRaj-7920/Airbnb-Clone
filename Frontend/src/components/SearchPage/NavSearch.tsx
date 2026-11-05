import { Search } from "lucide-react"
import SearchHome from '../../assets/imgs/Ssrchbarhome.png'

const NavSearch = () => {
    return (
        <div className="flex justify-center items-center w-1/2">
            {/* Main Search Bar */}
            <div
                className="group mt-1 flex justify-between items-center w-[69%] ml-24 border border-gray-300 rounded-full relative shadow-[-1px_10px_40px_-19px_rgba(117,115,115,1)] cursor-pointer"
            >
                {/* Homes Nearby */}
                <div
                    className="group flex justify-center items-center px-1.5 pr-3.5"
                >
                    <img src={SearchHome} alt="" className="w-12 h-12" />
                    <span className="text-sm font-semibold">Homes in map area</span>
                </div>

                <div className="absolute left-1/3 translate-x-12 border border-gray-300 h-6"></div>

                {/* When */}
                <div
                    className="flex justify-center items-center w-25"
                >
                    <span className="text-sm font-semibold">Any Week</span>
                </div>

                <div className="absolute left-2/3 border border-gray-300 h-6"></div>

                {/* Who */}
                <div
                    className="flex justify-center items-center w-30 px-3 mr-5 -translate-x-2">
                    <span className="text-sm font-semibold">Add guests</span>
                </div>

                {/* Search Button */}
                <div className="absolute right-2 text-white bg-red-600 p-2 rounded-full">
                    <Search size={16} />
                </div>
            </div>
        </div>
    )
}

export default NavSearch
