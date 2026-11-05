import { Outlet } from "react-router-dom"
import UsrNavbar from "../components/Users/UsrNavbar"
import UsrsSidebar from "../components/Users/UsrsSidebar"

const Users = () => {
  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-gray-300">
        <UsrNavbar />
      </nav>

      <main className="h-[87vh] w-full flex">
        {/* SideBar */}
        <UsrsSidebar />

        {/* Main Section */}
        <Outlet />
      </main>
    </main>
  )
}

export default Users
