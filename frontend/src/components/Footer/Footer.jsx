import logo from "../../assets/brief.io-logo-placeholder.png"
import pulseLogo from "../../assets/pulse-logo.png"
import "./Footer.css"
import { Link } from "react-router-dom";

/* Footer component will be used across the Home, Pricing, and Contact Pages. It will not be used on the landing page as those types of pages are free
from exit features to assist in boosting conversions. It will also not be used on Login and Registration Pages as they have a single-intent.
Some links in the footer intentionally have not real internal linking but are for design purposes for the SaSS product */

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-brand">

                <img src={logo} alt="Brief.io logo" className="footer-logo-img" />
                
                <p className="footer-name">Brief.io</p>
                <p className="footer-address">

                    560 Lexington Ave
                    <br />
                    New York, NY 10022

                </p>

            </div>

            <div className="footer-column">

                <p className="footer-column-title">Product</p>

                <a href="#">Docs</a>
                <Link to="/pricing">Pricing</Link>
                <a href="#">Case Studies</a>
                <a href="#">White Papers</a>
                
            </div>

            <div className="footer-column">

                <p className="footer-column-title">Company</p>

                <Link to="/contact">Contact</Link>
                <a href="#">Careers</a>
                <a href="#">Terms</a>
                <a href="#">Press</a>                
                
            </div>

            <div className="footer-column">

                <p className="footer-column-title">Resources</p>

                <a href="#">Blog</a>
                <a href="#">Templates</a>

                <div className="pulse-logo-container">

                    <img src={pulseLogo} alt="Pulse logo" className="pulse-logo"/>

                    <h3>Pulse<sup>by Brief.io<i className="fa-solid fa-arrow-up-right-from-square"></i></sup></h3>
                    

                </div>

            </div>

            <div className="footer-column">

                <p className="footer-column-title">Social</p>

                <div className="footer-social-icons">

                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-square-threads"></i></a>

                </div>
             
                
            </div>               
                
            <hr className="footer-divider"/>
            <p className="footer-copyright">© 2026 Brief.io</p>                                  

        </footer>

    )

}

export default Footer