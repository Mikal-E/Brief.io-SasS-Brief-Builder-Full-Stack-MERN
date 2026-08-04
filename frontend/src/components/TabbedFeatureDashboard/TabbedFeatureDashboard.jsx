import { useState } from "react"
import "./TabbedFeatureDashboard.css"
import landscape from "../../assets/landscape.jpg"
import "../../styles/section-heading.css"

/* This is the second tabbed element on Home.jsx that displays different blocks of content based on the tab that was clicked. It is positioned right
above the reviews and the CTA that are at the bottom of the page.

It uses useState to track which tab is active. The component handles all 3 of the dashboard content blocks near the bottom of Home.jsx and is controlled by a prop.
The multiple variables to change the classes of the buttons will be refactored later using ternary operators in the classes. */

function TabbedFeatureDashboard({ tabContent }) {

    const [activeTab, setActiveTab] = useState(1)

    let tab1Class = ""

    if (activeTab === 1) {

        tab1Class = "tab-active"

    }

    let tab2Class = ""

    if (activeTab === 2) {

        tab2Class = "tab-active"

    }

    let tab3Class = ""

    if (activeTab === 3) {

        tab3Class = "tab-active"

    }

const currentTab = tabContent[activeTab - 1]

    return (

    <section className="tabbed-feature-dashboard">

        <h2 className="section-heading">Sed ut perspiciatis unde omnis iste natus</h2>

        <div className="tabbed-feature-dashboard-nav">

            <button onClick={() => setActiveTab(1)} className={tab1Class}>Tab 1</button>
            <button onClick={() => setActiveTab(2)} className={tab2Class}>Tab 2</button>
            <button onClick={() => setActiveTab(3)} className={tab3Class}>Tab 3</button>

        </div>

        <div className="tabbed-feature-dashboard-grid">

            {currentTab.items.map((item, index) => (

                <div className="tabbed-feature-dashboard-grid-item" key={index}>

                    <i className="fa-solid fa-circle-check"></i>
                    <p>{item}</p>

                </div>

            ))}

        </div>

        <div className="tabbed-feature-dashboard-image">

            <img src={currentTab.image} alt="Placeholder" />

        </div>

    </section>

)

}

export default TabbedFeatureDashboard