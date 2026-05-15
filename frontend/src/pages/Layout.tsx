import { Outlet } from "react-router-dom"
import Navbar from "../Layouts/navbar/navbar"
import Sidebar from "../Layouts/SideBar/Sidebar"
import MainContainer from "../Layouts/MainContainer/MainContainer"

const Layout = () => {
  return (
      <div className="h-screen">
          <div className="h-15">
      <Navbar />
      </div>

          <div className="h-[calc(100%-60px)] flex">
              <Sidebar /> 
              
              <MainContainer>    
            <Outlet />
              </MainContainer>
          </div>
    </div>
  )
}

export default Layout
