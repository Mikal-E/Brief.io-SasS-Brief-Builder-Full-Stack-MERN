import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar"
import TopBar from "../../components/Dashboard/TopBar/TopBar"
import "./DashboardLayout.css"

function DashboardLayout() {

    return (

        <div className="dash-layout">

            <Sidebar />

            <div className="dash-main">

                <TopBar />
                <Outlet />

            </div>

        </div>

    )

}

export default DashboardLayout