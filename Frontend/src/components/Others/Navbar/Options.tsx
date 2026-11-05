import { CircleUser, Heart, LogOut, Menu, MessageSquare, Navigation, User, UserRound } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const Options = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])



  return (
    <div className="flex items-center justify-end gap-1 sm:gap-2 pr-6">
      <button
        type="button"
        className="hidden whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100 lg:block">
        Become a host
      </button>

      <button
        type="button"
        onClick={() => navigate("/users")}
        className="hidden rounded-full p-2.5 text-gray-800 transition-colors hover:bg-gray-100 sm:block">
        <UserRound size={20} strokeWidth={1.8} />
      </button>

      <button
        type="button"
        aria-label="Open menu"
        ref={dropDownRef}
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
        className={`flex items-center justify-center bg-gray-100 hover:bg-gray-200/75 ${isOpen && "bg-gray-100"} p-2.5 rounded-full relative transition-all duration-200`}>
        <Menu size={18} strokeWidth={2} />

        {/* Dropdown */}
        <ul className={`${isOpen ? "flex flex-col" : "hidden"} justify-center items-start bg-white w-60 absolute shadow-[0px_0px_20px_-8px_rgba(117,115,115,1)] top-13 right-0 py-2 z-10 rounded-xl`}>
          <li className="w-full flex justify-start items-start gap-2.5 px-5 py-2 hover:bg-gray-100 hover:cursor-pointer transition-all duration-100">
            <span><Heart size={17} /></span>
            <p className="text-sm font-medium">Wishlists</p>
          </li>

          <li className="w-full flex justify-start items-start gap-2.5 px-5 py-2 hover:bg-gray-100 hover:cursor-pointer transition-all duration-100">
            <span><Navigation size={17} /></span>
            <p className="text-sm font-medium">Trips</p>
          </li>

          <li className="w-full flex justify-start items-start gap-2.5 px-5 py-2 hover:bg-gray-100 hover:cursor-pointer transition-all duration-100">
            <span><MessageSquare size={17} /></span>
            <p className="text-sm font-medium">Messages</p>
          </li>

          <li className="w-full flex justify-start items-start gap-2.5 px-5 py-2 hover:bg-gray-100 hover:cursor-pointer transition-all duration-100">
            <span><User size={17} /></span>
            <p className="text-sm font-medium">Profile</p>
          </li>

          <li className="w-3/4 my-2.5 border border-gray-400/60 self-center"></li>

          {/* <li className="w-full flex justify-start items-start gap-2.5 px-5 py-2 hover:bg-gray-100 hover:cursor-pointer transition-all duration-100">
            <span><LogOut size={17} strokeWidth={1.5} /></span>
            <p className="text-sm font-medium">Login or Signup</p>
          </li> */}

          <li className="w-full flex justify-start items-center gap-2.5 px-5 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 hover:cursor-pointer transition-all duration-100">
            <span><CircleUser size={17} strokeWidth={1.5} /></span>
            <p className="text-sm font-medium">Login or Signup</p>
          </li>
        </ul>
      </button>
    </div>
  )
}

export default Options
