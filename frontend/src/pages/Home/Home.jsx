import "./Home.css"
import landscape from "../../assets/landscape.jpg"

function HomePage() {

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

            <section className="section-intro">

                <h2 className="section-heading">Sed ut perspiciatis unde omnis iste natus</h2>

                <div className="section-intro-image">
                    
                <img src={landscape} alt="Placeholder" className="section-image" />

                </div>

            </section>

        </div>

    )

}

export default HomePage