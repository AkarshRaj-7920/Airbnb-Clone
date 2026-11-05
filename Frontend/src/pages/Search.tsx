import { Outlet } from "react-router-dom"
import FilterBar from "../components/Others/Navbar/FilterBar"
import NavbarSearch from "../components/Others/Navbar/NavbarSearch"

const Search = () => (
  <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden">
    {/* Navbar */}
    <nav className="sticky top-0 z-[100] bg-white">
      <NavbarSearch />

      {/* FilterBar */}
      <FilterBar />
    </nav>

    <main className="w-full h-[78vh] flex">
      {/* Main Section */}
      <section className="w-[60%] pl-12">
        <Outlet />
      </section>

      {/* Maps Section */}
      <section className="w-[40%] fixed right-0 bottom-15 flex justify-center items-center px-5 pr-10">
        <div className="rounded-2xl overflow-hidden">
          <img src="https://img.magnific.com/free-vector/digital-tracking-roadmap-with-orange-gps-navigator-route-path_1017-64661.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </div>
      </section>
    </main>
  </main>
)

export default Search