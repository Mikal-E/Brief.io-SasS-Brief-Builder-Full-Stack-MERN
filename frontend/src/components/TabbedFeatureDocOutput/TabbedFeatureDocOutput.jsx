import { useState } from "react";
import "./TabbedFeatureDocOutput.css"
import portrait from "../../assets/portrait.jpg"
import "../../styles/section-heading.css"

/* This is the first tabbed element on Home.jsx that displays different blocks of content based on the tab that was clicked. It is positioned right
after the staggered content with 4 content blocks.

It uses useState to track which tab is active. 
The multiple variables to change the classes of the buttons will be refactored later using ternary operators in the classes. */

function TabbedFeatureDocOutput() {

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

    let tab4Class = ""

    if (activeTab === 4) {

        tab4Class = "tab-active"
        
    }

const tabContent = [

    {
        heading: "Ut enim ad minima quis",
        image: portrait,
        items: [
            "Nemo enim ipsam voluptatem quia",
            "Nemo enim ipsam voluptatem quia",
            "Nemo enim ipsam voluptatem quia"
        ]
    },

    {
        heading: "Ut enim ad minima quis",
        image: portrait,
        items: [
            "Nemo enim ipsam voluptatem quia",
            "Nemo enim ipsam voluptatem quia",
            "Nemo enim ipsam voluptatem quia"
        ]
    },

    {
        heading: "Ut enim ad minima quis",
        image: portrait,
        items: [
            "Nemo enim ipsam voluptatem quia",
            "Nemo enim ipsam voluptatem quia",
            "Nemo enim ipsam voluptatem quia"
        ]
    },

    {
        heading: "Ut enim ad minima quis",
        image: portrait,
        items: [
            "Nemo enim ipsam voluptatem quia",
            "Nemo enim ipsam voluptatem quia",
            "Nemo enim ipsam voluptatem quia"
        ]
    }

]

const currentTab = tabContent[activeTab - 1]

    return (

        <section className="tabbed-feature-doc-output">

            <h2 className="section-heading">Sed ut perspiciatis unde omnis iste natus</h2>

            {/* Lives in Home.jsx instead <h2 className="tabbed-feature-doc-output-heading">Sed ut perspiciatis unde omnis iste natus</h2> */}

            <div className="tabbed-feature-doc-output-nav">

                {/* <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "tab-active" : ""}>Tab 1</button> */}
                <button onClick={() => setActiveTab(1)} className={tab1Class}>Tab 1</button>
                <button onClick={() => setActiveTab(2)} className={tab2Class}>Tab 2</button>
                <button onClick={() => setActiveTab(3)} className={tab3Class}>Tab 3</button>
                <button onClick={() => setActiveTab(4)} className={tab4Class}>Tab 4</button>

            </div>

            <div className="tabbed-feature-doc-output-content">

                {/* <div className="tabbed-feature-doc-output-text">

                    <h3>Ut enim ad minima quis</h3>

                    <ul>

                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>
                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>
                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>

                    </ul>

                </div> */}

                <div className="tabbed-feature-doc-output-text">

                    <h3>{currentTab.heading}</h3>

                    <ul>

                        {currentTab.items.map((item, index) => (

                            <li key={index}><i className="fa-solid fa-circle-check"></i> {item}</li>

                        ))}

                    </ul>

                </div>

                <div className="tabbed-feature-doc-output-image">

                    <img src={currentTab.image} alt="Placeholder" />
                    
                </div>

            </div>

        </section>

    )

}

export default TabbedFeatureDocOutput