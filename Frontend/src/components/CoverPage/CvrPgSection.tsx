import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import CvrCard from "./CvrCard"

const CvrPgSection = () => {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Header */}
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-semibold">Stay in South Delhi</h1>
                    <span className="bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-all duration-150"><ArrowRight size={14} /></span>
                </div>

                <div className="flex justify-between items-center gap-1">
                    <p className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-150">
                        <ChevronLeft size={16} />
                    </p>

                    <p className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-150">
                        <ChevronRight size={16} />
                    </p>
                </div>
            </div>

            {/* Main Cards */}
            <div className="py-4 flex gap-2.5">
                <CvrCard />
                <CvrCard />
                <CvrCard />
                <CvrCard />
                <CvrCard />
                <CvrCard />
            </div>
        </div>
    )
}

export default CvrPgSection
