import "./DocOutputPreview.css"
import portrait from "../../assets/portrait.jpg"
import docOutputPreview from "../../assets/tabbed-featured-doc-output-1.png"
import "../../styles/section-heading.css"


function DocOutputPreview() {

    return (

        <section className="doc-output-preview">

            <h2 className="section-heading">That's your brief. Don't lose it!</h2>
            <p className="in-progress">In progress - Output version of brief displays above, conversion is to get brief emailed as a pdf and gain access to full features of the free plan: Puppeteer PDF gen + Nodemailer, wired to auth
</p>

            <div className="doc-output-preview-content">

                <div className="doc-output-preview-text">

                    <h3>A Brief, Not a Wall of Text</h3>

                    <ul>

                        <li><i className="fa-solid fa-circle-check"></i> Every field organized under Project Info, Audience, Strategy, and Scope</li>
                        <li><i className="fa-solid fa-circle-check"></i> Formatted consistently with no version drift between different project briefs</li>
                        <li><i className="fa-solid fa-circle-check"></i> Built to be shared while maintaining consistent workflows</li>

                    </ul>

                </div>

                <div className="doc-output-preview-image">

                    <img src={docOutputPreview} alt="Placeholder" />
                    
                </div>

            </div>

        </section>

    )

}

export default DocOutputPreview