import conradAvatar from "../../../assets/conrad-avatar.jpg"
import "./TopBar.css"

function getGreeting() {

        const hour = new Date().getHours()

        if (hour < 12) return "Good morning"

        if (hour < 18) return "Good afternoon"

        return "Good evening"

}

function TopBar() {

    return (

        <header className="dashtop-bar">

            <h2>{getGreeting()}, Conrad</h2>
            <img src={conradAvatar} alt="Conrad McAllister" className="dashtop-avatar"/>

        </header>

    )

}

export default TopBar