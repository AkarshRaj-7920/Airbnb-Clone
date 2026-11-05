import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { Search } from "lucide-react"
import { useNavigate } from 'react-router-dom'

type CvrSearchBarProps = {
    isCompact: boolean
}

const CvrSearchBar = ({ isCompact }: CvrSearchBarProps) => {
    const searchBarRef = useRef<HTMLDivElement>(null);
    const whereRef = useRef<HTMLDivElement>(null);
    const whenRef = useRef<HTMLDivElement>(null);
    const whoRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate()

    return (
        <div className="flex justify-center items-center border-b border-gray-300/70 pb-11">
            {/* Main Search Bar */}
            <div
                ref={searchBarRef}
                className="group mt-1 w-[90%] lg:w-[63%] flex justify-between items-center gap-1 border border-gray-300 ml-2 rounded-full relative shadow-[-1px_10px_40px_-19px_rgba(117,115,115,0.4)]"
            >
                {/* Where */}
                <div
                    ref={whereRef}
                    className="group w-1/3 flex flex-col hover:bg-gray-200 px-6 py-3 rounded-full transition-all duration-200"
                >
                    <span className="text-sm">Where</span>
                    <input className="text-sm font-medium" type="text" placeholder="Search Destinations" />
                </div>

                <div className="group-hover:hidden absolute left-1/3 border border-gray-200 h-7"></div>

                {/* When */}
                <div 
                ref={whenRef}
                className="w-1/3 flex flex-col hover:bg-gray-200 px-6 py-3 rounded-full transition-all duration-200"
                >
                    <span className="text-sm">When</span>
                    <p className="text-sm font-medium">Add dates</p>
                </div>

                <div className="group-hover:hidden absolute right-1/3 border border-gray-200 h-7"></div>

                {/* Who */}
                <div
                ref={whoRef}
                className="w-1/3 flex flex-col hover:bg-gray-200 px-6 py-3 rounded-full transition-all duration-200">
                    <span className="text-sm">Who</span>
                    <p className="text-sm font-medium">Add guests</p>
                </div>

                {/* Search Button */}
                <div
                onClick={() => navigate("/s")}
                className="absolute right-2 text-white bg-red-600 p-3.5 rounded-full">
                    <Search size={18} />
                </div>
            </div>
        </div>
    )
}

export default CvrSearchBar
