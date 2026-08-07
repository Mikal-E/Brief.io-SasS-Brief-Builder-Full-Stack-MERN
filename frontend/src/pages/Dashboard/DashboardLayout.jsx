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

                <main className="dash-content">

                    <Outlet />
                    
                </main>

            </div>

        </div>

    )

}

export default DashboardLayout