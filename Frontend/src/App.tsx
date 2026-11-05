import { Navigate, Route, Routes } from "react-router-dom"
import CoverPage from "./pages/CoverPage"
import AllSection from "./components/CoverPage/AllSection"
import HomeSection from "./components/CoverPage/HomeSection"
import ExperienceSection from "./components/CoverPage/ExperienceSection"
import ServiceSection from "./components/CoverPage/ServiceSection"
import Search from "./pages/Search"
import HomeSrchPage from "./components/SearchPage/HomeSrchPage"
import Users from "./pages/Users"
import UsrProfile from "./components/Users/UsrProfile"
import UsrConnections from "./components/Users/UsrConnections"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoverPage />} >
          <Route index element={<AllSection/>} />
          <Route path="home" element={<HomeSection />} />
          <Route path="experience" element={<ExperienceSection />} />
          <Route path="services" element={<ServiceSection />} />
        </Route>

        <Route path="/s" element={<Search />}>
          <Route index element={<Navigate to='homeSrch' replace />} />
          <Route path="homeSrch" element={<HomeSrchPage />} />
        </Route>

        <Route path="/users" element={<Users />}>
          <Route index element={<Navigate to='profile' replace />} />
          <Route path="profile" element={<UsrProfile />} />
          <Route path="connections" element={<UsrConnections />} />
        </Route>
      </Routes>
    </>
  )
}

export default App