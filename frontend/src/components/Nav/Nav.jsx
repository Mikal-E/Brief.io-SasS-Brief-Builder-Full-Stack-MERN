import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "../../assets/brief.io-logo-placeholder.png"
import "./Nav.css"

/* Nav component will be used across the Home, Pricing, and Contact Pages. It will not be used on the landing page as those types of pages are free
from exit features to assist in boosting conversions. It will also not be used on Login and Registration Pages as they have a single-intent. */

function Nav() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        function handleScroll() {

            setScrolled(window.scrollY > 20)

        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (

        <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>

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

            </div>

        </nav>

    )

}

export default Nav