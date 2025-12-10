import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DashboardLayout;