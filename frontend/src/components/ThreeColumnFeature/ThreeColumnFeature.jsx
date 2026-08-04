import "./ThreeColumnFeature.css"
import square from "../../assets/square.jpg"
import "../../styles/section-heading.css"

/* This is the banner section under the first tabbed element on Home.jsx It has the section heading, then 3 columns: image, column heading, and <p> in each column. */

function ThreeColumnFeature() {

    const columns = [

        {
            image: square,
            heading: "Ut enim ad minima quis",
            text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi"
        },

        {
            image: square,
            heading: "Ut enim ad minima quis",
            text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi"
        },

        {
            image: square,
            heading: "Ut enim ad minima quis",
            text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi"
        }

    ]

    return (

        <section className="three-column-feature">

            <h2 className="section-heading">Omnis iste natus enim ipsam luptatem</h2>

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