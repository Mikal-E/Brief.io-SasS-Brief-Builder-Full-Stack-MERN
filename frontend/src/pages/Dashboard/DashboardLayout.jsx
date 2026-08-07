import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar"
import "./DashboardLayout.css"

function DashboardLayout() {

    return (

        <div className="dash-layout">

            <Sidebar />

            <div className="dash-main">

                <Outlet />

            </div>

        </div>

    )

}

export default DashboardLayout