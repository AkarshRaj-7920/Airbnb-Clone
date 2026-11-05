import { useState } from 'react'
import gsap from 'gsap'
import allSelected from '../../../assets/imgs/all-slected.avif'
import allNotSelected from '../../../assets/imgs/all-notslected.avif'
import homeSeleted from '../../../assets/imgs/home-slected.avif'
import homeNotSeleted from '../../../assets/imgs/home-notslected.avif'
import expSelected from '../../../assets/imgs/exp-slected.avif'
import expNotSelected from '../../../assets/imgs/exp-notslected.avif'
import serviceNotSelected from '../../../assets/imgs/service-notselected.avif'
import serviceSelected from '../../../assets/imgs/service-slected.avif'



const NavigationElems = () => {
    const [selectService, setService] = useState("All")

    return (
        <div className="flex gap-4 font-semibold text-gray-500 pr-10 lg:pl-5">
            <button
                onClick={() => {
                    if (selectService !== "All") {
                        setService("All")
                    }
                }}
                className="flex justify-center items-center relative pr-2 lg:pl-6 cursor-pointer">
                <div className="w-15 h-15 lg:w-18 lg:h-18">
                    <img src={selectService === "All" ? allSelected : allNotSelected} alt="" />
                </div>
                <span className={`absolute top-1/3 lg:-translate-y-1 translate-x-8 lg:translate-x-9 ${selectService === "All" && 'text-black'} text-sm lg:text-base`}>All</span>
            </button>

            <button
                onClick={() => {
                    if (selectService !== "Home") {
                        setService("Home")
                    }
                }}
                className="flex justify-center items-center relative pr-6 pl-2 cursor-pointer">
                <div className="w-15 h-15 lg:w-18 lg:h-18">
                    <img src={selectService === "Home" ? homeSeleted : homeNotSeleted} alt="" />
                </div>
                <span className={`absolute top-1/3 lg:-translate-y-1 translate-x-13 lg:translate-x-14 ${selectService === "Home" && 'text-black'} text-sm lg:text-base`}>Homes</span>
            </button>

            <button
                onClick={() => {
                    if (selectService !== "Experience") {
                        setService("Experience")
                    }
                }}
                className="flex justify-center items-center relative pr-6 pl-2 lg:pl-4 cursor-pointer">
                <div className="w-15 h-15 lg:w-18 lg:h-18">
                    <img src={selectService === "Experience" ? expSelected : expNotSelected} alt="" />
                </div>
                <span className={`absolute top-1/3 lg:-translate-y-1 translate-x-13 lg:translate-x-15 ${selectService === "Experience" && 'text-black'} text-sm lg:text-base`}>Experience</span>
            </button>

            <button
                onClick={() => {
                    if (selectService !== "Service") {
                        setService("Service")
                    }
                }}
                className="flex justify-center items-center relative pr-2 pl-7 lg:pl-9 cursor-pointer">
                <div className="w-15 h-15 lg:w-18 lg:h-18">
                    <img src={selectService === "Service" ? serviceSelected : serviceNotSelected} alt="" />
                </div>
                <span className={`absolute top-1/3 lg:-translate-y-1 translate-x-13 lg:translate-x-14 ${selectService === "Service" && 'text-black'} text-sm lg:text-base`}>Services</span>
            </button>
        </div>
    )
}

export default NavigationElems