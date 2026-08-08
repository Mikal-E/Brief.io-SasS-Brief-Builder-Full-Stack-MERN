import { Link } from "react-router-dom"
import notFoundImg from "../../assets/404-page.jpg"
import "./NotFound.css"

function NotFound() {

    return (

        <div className="not-found">

            <img src={notFoundImg} alt="" className="not-found-bg" />

            <div className="not-found-overlay"></div>

            <div className="not-found-content">

                <h1>The page you are looking for does not exist or has been moved.</h1>
                <p>Return to the Home Page using the button below.</p>
                <Link to="/" className="not-found-button">Return Home</Link>
                
            </div>

        </div>
    )
}
export default NotFound