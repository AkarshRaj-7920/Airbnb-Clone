import { useLayoutEffect, useState } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CvrSearchBar from "../components/CoverPage/CvrSearchBar"
import Navbar from "../components/Others/Navbar/Navbar"
import { Outlet } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

const CoverPage = () => {
  const [isCompact, setisCompact] = useState(false)

  useLayoutEffect(() => {
    const trigger = ScrollTrigger.create({
      start: "20px top",
      onEnter: () => setisCompact(true),
      onLeaveBack: () => setisCompact(false),
    })

    return () => trigger.kill()
  }, [])

  console.log(isCompact)

  return (
    <main className="min-h-screen w-full">
      {/* Navbar */}
      <nav className="sticky top-0 z-[100] bg-white">
        <Navbar isCompact={isCompact} />

        {/* Search Bar */}
        <CvrSearchBar isCompact={isCompact} />
      </nav>

      <Outlet />
    </main>
  )
}

export default CoverPage