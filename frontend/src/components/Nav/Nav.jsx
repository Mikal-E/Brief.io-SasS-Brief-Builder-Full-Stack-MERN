import { Link } from "react-router-dom"
import logo from "../../assets/brief.io-logo-placeholder.png"
import "./Nav.css"

/* Nav component will be used across the Home, Pricing, and Contact Pages. It will not be used on the landing page as those types of pages are free
from exit features to assist in boosting conversions. It will also not be used on Login and Registration Pages as they have a single-intent. */

function Nav({ solidBackground }) {

    return (

        // <nav className="nav" | Updated with prop above and ternary operator below, in order to use on a 404 page where the nav has a background.>
        <nav className={`nav ${solidBackground ? "nav-solid" : ""}`}>

            <Link to="/" className="nav-logo">
            
                <img src={logo} alt="Brief.io logo" className="nav-logo-img" />
            
            </Link>

            <div className="nav-links">

                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>

            </div>

            <div className="nav-actions">

                <Link to="/login" className="nav-signin">Sign In</Link>
                {/* <Link to="/register" className="nav-cta">Get Started</Link> */}


            </div>

        </nav>

    )

}

export default Nav