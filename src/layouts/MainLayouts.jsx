import { Outlet } from "react-router-dom"
import NavBar from "../component/NavBar"

const MainLayouts = () => {
  return (
    <>
    <NavBar hospitalName="M&S"/>
    <Outlet/>
    </>
  )
}

export default MainLayouts