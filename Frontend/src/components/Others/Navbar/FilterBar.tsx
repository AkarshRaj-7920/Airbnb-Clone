import { ChevronDown, SlidersHorizontal } from "lucide-react"

const FilterBar = () => {
  return (
    // Options
    <div className="border-b border-gray-300 flex justify-center items-center py-3">
      <div className="border border-gray-300 hover:border-gray-400/80 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
        <SlidersHorizontal size={16} strokeWidth={2} />
        <span className="text-xs text-gray-700/90">Filters</span>
      </div>

      <div className="h-5 border border-gray-200 mx-3"></div>

      <ul className="flex justify-center items-center text-xs gap-2 pb-0.5">
        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          Self check-in
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-4 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          TV
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          Wifi
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          Instant Book
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          Heating
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          Kitchen
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          Air Conditioning
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          Hot Tub
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-center px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          Washing Machine
        </li>

        <li className="border border-gray-300 hover:border-gray-400/80 text-gray-700/90 flex justify-center items-end px-3 py-2 gap-2 rounded-full transition-all duration-100 cursor-pointer">
          <span>Price</span>
          <ChevronDown size={16} strokeWidth={1.5} />
        </li>
      </ul>
    </div>
  )
}

export default FilterBar
