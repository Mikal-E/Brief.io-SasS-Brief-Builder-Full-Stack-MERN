import { Link } from "react-router-dom"
import logo from "../../assets/brief.io-logo-placeholder.png"
import "./Nav.css"

/* Nav component will be used across the Home, Pricing, and Contact Pages. It will no be used on the landing page as those
types of pages are free from exit features to assist in boosting conversions. It will also no be used on Login and Registration Pages as they are fouced also. */

function Nav() {

    return (

        <nav className="nav">

            <Link to="/" className="nav-logo">
            
                <img src={logo} alt="Brief.io logo" className="nav-logo-img" />
            
            </Link>

            <div className="nav-links">

                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>

            </div>

            <div className="nav-links">

                <Link to="/login" className="nav-signin">Sign In</Link>
                <Link to="/register" className="nav-cta">Get Started</Link>


            </div>

        </nav>

    )

}

export default Nav