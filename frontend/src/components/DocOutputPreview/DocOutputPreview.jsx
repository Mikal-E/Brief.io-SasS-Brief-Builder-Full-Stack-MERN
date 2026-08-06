import "./DocOutputPreview.css"
import portrait from "../../assets/portrait.jpg"
import "../../styles/section-heading.css"

function DocOutputPreview() {

    return (

        <section className="doc-output-preview">

            <h2 className="section-heading">Sed ut perspiciatis unde omnis iste natus</h2>

            <div className="doc-output-preview-content">

                <div className="doc-output-preview-text">

                    <h3>Ut enim ad minima quis</h3>

                    <ul>

                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>
                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>
                        <li><i className="fa-solid fa-circle-check"></i> Nemo enim ipsam voluptatem quia</li>

                    </ul>

                </div>

                <div className="doc-output-preview-image">

                    <img src={portrait} alt="Placeholder" />
                    
                </div>

            </div>

        </section>

    )

}

export default DocOutputPreview