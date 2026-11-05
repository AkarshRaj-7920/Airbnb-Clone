
const HomeSrchCard = () => {
    return (
        <div className="w-full flex flex-col gap-2 pb-2 cursor-pointer">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden w-full h-68">
                <img src="https://images.unsplash.com/photo-1773578978637-c9771e7a9913?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" className="w-full h-full object-cover" />
            </div>

            {/* Description */}
            <div className="leading-[1.1] px-1"> 
                <div className="flex justify-between items-center pt-1.5">
                    <span className="font-semibold">
                        <span>Flat </span>
                        in
                        <span> Noida</span>
                    </span>

                    <span className="font-semibold">
                        ★
                        <span> 4.9 </span>
                        <span>(10)</span>
                    </span>
                </div>

                <p className="font-semibold text-gray-500 w-full h-5 overflow-clip">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, qui!
                </p>

                <p className="font-semibold text-gray-500 w-full">
                    <span>1 </span> bedroom ● <span>1 </span> double bed ● <span>1 </span> bathroom
                </p>

                <p className="font-semibold text-gray-500 w-full">
                    <span>1</span>-<span>6 </span> Nov
                </p>

                <p className="font-semibold text-gray-500 w-full pt-3">
                    <span className="text-black underline">₹9,735 </span> 
                    for
                    <span> 5 </span> nights 
                </p>
            </div>
        </div>
    )
}

export default HomeSrchCard
