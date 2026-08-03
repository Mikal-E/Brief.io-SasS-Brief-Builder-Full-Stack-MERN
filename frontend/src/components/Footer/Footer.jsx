import logo from "../../assets/brief.io-logo-placeholder.png"
import "./Footer.css"

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
                <a href="#">Pricing</a>
                <a href="#">Case Studies</a>
                <a href="#">White Papers</a>
                
            </div>

            <div className="footer-column">

                <p className="footer-column-title">Company</p>

                <a href="#">Contact</a>
                <a href="#">Careers</a>
                <a href="#">Terms</a>
                <a href="#">Pricing</a>
                <a href="#">Press</a>                
                
            </div>

            <div className="footer-column">

                <p className="footer-column-title">Resources</p>

                <a href="#">Blog</a>
                <a href="#">Templates</a>

            </div>

            <div className="footer-column">

                <p className="footer-column-title">Social</p>

                <div className="footer-social-icons">

                    <a href="#"><i className="fa-brands fa-square-linkedin"></i></a>
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