import { useState } from "react";
import "./TabbedFeatureDocOutput.css"
import portrait from "../../assets/portrait.jpg"

/* This is the first tabbed element on Home.jsx that displays different blocks of content based on the tab that was clicked. It is positioned right
after the staggered content with 4 content blocks.

It uses useState to track which tab is active. */

function TabbedFeatureDocOutput() {

    const [activeTab, setActiveTab] = useState(1)

    return (

        <section className="tabbed-feature-doc-output">

            <h2 className="tabbed-feature-doc-output-heading">Sed ut perspiciatis unde omnis iste natus</h2>

            <div className="tabbed-feature-doc-output-nav">

                <button onClick={() => setActiveTab(1)}>Tab 1</button>
                <button onClick={() => setActiveTab(2)}>Tab 2</button>
                <button onClick={() => setActiveTab(3)}>Tab 3</button>
                <button onClick={() => setActiveTab(4)}>Tab 4</button>

            </div>

            <div className="tabbed-feature-doc-output-content">

                <div className="tabbed-feature-doc-output-text">

                    <h3>Ut enim ad minima quis</h3>

                    <ul>

                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>
                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>
                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>

                    </ul>

                </div>

                <div className="tabbed-feature-doc-output-image">

                    <img src={portrait} alt="Placeholder" />

                </div>

            </div>

        </section>

    )

}

export default TabbedFeature