import { Outlet, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar"
import TopBar from "../../components/Dashboard/TopBar/TopBar"
import "./DashboardLayout.css"

function DashboardLayout() {

    const location = useLocation()
    const [pdfEmailStatus, setPdfEmailStatus] = useState(null)

    useEffect(function() {

        if (location.state && location.state.pdfEmailStatus) {

            setPdfEmailStatus(location.state.pdfEmailStatus)

        }

    }, [location.state])

    return (

        <div className="dash-layout">

            <Sidebar />

            <div className="dash-main">

                <TopBar pdfEmailStatus={pdfEmailStatus} onDismiss={function() { setPdfEmailStatus(null) }} />

                <main className="dash-content">

                    <Outlet />
                    
                </main>

            </div>

        </div>

    )

}

export default DashboardLayout