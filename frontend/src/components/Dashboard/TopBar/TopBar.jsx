import conradAvatar from "../../../assets/conrad-avatar.jpg"
import "./TopBar.css"

function getGreeting() {

        const hour = new Date().getHours()

        if (hour < 12) return "Good morning"

        if (hour < 18) return "Good afternoon"

        return "Good evening"

}

function TopBar({ pdfEmailStatus, onDismiss }) {

    return (

        <header className="dashtop-bar">

            <div className="dashtop-bar-row">

                <h2>{getGreeting()}, Conrad</h2>

                {pdfEmailStatus && (

                    <div className={pdfEmailStatus === "sent" ? "dashtop-banner dashtop-banner-success" : "dashtop-banner dashtop-banner-error"}>

                        <p>{pdfEmailStatus === "sent" ? "Your brief has been emailed to you." : "Error emailing your PDF. Please try again."}</p>
                        <button type="button" className="dashtop-banner-close" onClick={onDismiss}>×</button>
                        
                    </div>
                )}

                <img src={conradAvatar} alt="Conrad McAllister" className="dashtop-avatar"/>

            </div>

        </header>

    )

}

export default TopBar