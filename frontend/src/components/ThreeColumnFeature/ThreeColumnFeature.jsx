import "./ThreeColumnFeature.css"
import bannerContentBlock1 from "../../assets/banner-content-block-1.jpg"
import bannerContentBlock2 from "../../assets/banner-content-block-2.jpg"
import bannerContentBlock3 from "../../assets/banner-content-block-3.jpg"
import threeColumnFeature1 from "../../assets/three-column-feature-1.jpg"
import threeColumnFeature2 from "../../assets/three-column-feature-2.jpg"
import threeColumnFeature3 from "../../assets/three-column-feature-3.jpg"
import "../../styles/section-heading.css"

/* This is the banner section under the first tabbed element on Home.jsx It has the section heading, then 3 columns: image, column heading, and <p> in each column. */

function ThreeColumnFeature() {

    const columns = [

        {
            image: threeColumnFeature1,
            heading: "Fast creation, editing, with reliable consistency",
            text: "Create beautifully formatted briefs in minutes, make fast edits, and maintain consistent formatting between all initiatives"
        },

        {
            image: threeColumnFeature2,
            heading: "AI-Powered brief generation and edits",
            text: "AI-Mode streamlines creation of comprehensive briefs when flushing out details for complex and highly-important projects"
        },

        {
            image: threeColumnFeature3,
            heading: "Centralized and supremely organized",
            text: "Brief.io's user interface is equipped with dashboards for your briefs, team management, activities, and brief creation"
        }

    ]

    return (

        <section className="three-column-feature">

            <h2 className="section-heading">Project briefs supercharged with powerful features</h2>

            <div className="three-column-feature-columns">

                {columns.map((column, index) => (

                    <div className="three-column-feature-column" key={index}>

                        <img src={column.image} alt="Placeholder" />
                        <h3>{column.heading}</h3>
                        <p>{column.text}</p>
                        
                    </div>
                ))}

            </div>

        </section>

    )

}

export default ThreeColumnFeature