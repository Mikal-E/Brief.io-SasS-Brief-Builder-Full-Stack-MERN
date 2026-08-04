import "./TrustedLogos.css"
import "../../styles/section-heading.css"
import airplaneLogo2 from "../../assets/airplane-logo-2.png"
import trainLogo from "../../assets/train-logo.png"
import mapLogo from "../../assets/map-logo.png"
import airplaneLogo1 from "../../assets/airplane-logo-1.png"
import lionLogo from "../../assets/lion-logo.png"

/* This section displays the logos from business users of Brief.io for social proof/trust building. */

const logos = [

    { src: airplaneLogo2, alt: "Business logo" },
    { src: trainLogo, alt: "Business logo" },
    { src: mapLogo, alt: "Business logo" },
    { src: airplaneLogo1, alt: "Business logo" },
    { src: lionLogo, alt: "Business logo" }

]

function TrustedLogos() {

    return (

        <section className="trusted-logos">

            <h2 className="section-heading trusted-logos-heading">Trusted by professionals, entrepreneurs,
            <br />
            and businesses world-wide</h2>

            <div className="trusted-logos-row">

                {logos.map((logo, index) => (

                    <img src={logo.src} alt={logo.alt} className="trusted-logo" key={index} />

                ))}

            </div>

        </section>

    )

}

export default TrustedLogos