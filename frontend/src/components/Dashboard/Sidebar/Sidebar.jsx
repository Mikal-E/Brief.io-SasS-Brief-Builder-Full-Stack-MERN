import { NavLink } from "react-router-dom"
import briefioLogo from "../../../assets/brief.io-logo-placeholder.png"
import "./Sidebar.css"

function Sidebar() {

    return (

        <aside className="dashnav-sidebar">

            <div className="dashnav-header">

                <img src={briefioLogo} alt="Brief.io logo" className="dashnav-logo"/>
              
            </div>

            <nav className="dashnav-nav">

                <ul>

                    <li>

                        <NavLink to="/dashboard/briefs" className={({ isActive }) => isActive ? "dashnav-link active" : "dashnav-link"}>

                            <i className="fa-solid fa-file-lines"></i> Briefs

                        </NavLink>

                    </li>

                    <li>
                        
                        <NavLink to="/dashboard/team" className={({ isActive }) => isActive ? "dashnav-link active" : "dashnav-link"}>

                            <i className="fa-solid fa-user"></i> Team

                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/dashboard/activities" className={({ isActive }) => isActive ? "dashnav-link active" : "dashnav-link"}>

                            <i className="fa-solid fa-bell"></i> Activities

                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/dashboard/brief-builder" className={({ isActive }) => isActive ? "dashnav-link active" : "dashnav-link"}>

                            <i className="fa-solid fa-pen-to-square"></i> Brief Builder

                        </NavLink>

                    </li>

                </ul>

            </nav>

            <div className="dashnav-footer">

                <p><i className="fa-solid fa-gear"></i>Settings</p>
                <p><i className="fa-solid fa-right-from-bracket"></i>Log Out</p>

            </div>

        </aside>

    )

}

export default Sidebar