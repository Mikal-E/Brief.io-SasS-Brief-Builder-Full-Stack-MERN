import "../../styles/hero.css"
import "../../styles/section-heading.css"
import landscape from "../../assets/landscape.jpg"
import PricingCards from "../../components/PricingCards/PricingCards"
import TrustedLogos from "../../components/TrustedLogos/TrustedLogos"
import PricingTable from "../../components/PricingTable/PricingTable"

function PricingPage() {

    return (

        <div>

            <section className="hero" style={{ backgroundImage: `url(${landscape})` }}>

                <div className="hero-content">

                    <h1 className="hero-headline">Ra que verist et
                    <br />
                    omniet a ducipitis di</h1>
                    <p className="hero-subhead">Aped eos solupta tureped ut explaut qui
                    <br />
                    debis sum autest parum et et offic</p>
                    <button className="hero-cta">Get Started</button>

                </div>

            </section>

            <PricingCards />

            <TrustedLogos />

            <PricingTable />

        </div>

    )

}


export default PricingPage