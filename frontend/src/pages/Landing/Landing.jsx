import "./Landing.css"
import landscape from "../../assets/landscape.jpg"
import LandingFeatureContentBlock from "../../components/LandingFeatureContentBlock/LandingFeatureContentBlock"
import CampaignBriefBuilder from "../../components/CampaignBriefBuilder/CampaignBriefBuilder"
import footerLogo from "../../assets/brief.io-logo-placeholder.png"

/* This is a landing page for marketing and therefor is not linked to the website's navigation. It also strips away clicking of a logo
to redirect a user back to the home page and the footer links as well, to remove exititng attempts and distractions. */

function Landing() {

    return (

        <div>

            <section className="landing-hero" style={{ backgroundImage: `url(${landscape})` }}>

                <div className="landing-hero-content">

                    <h1 className="landing-hero-headline">Ra que verist et
                    

                    omniet a ducipitis di</h1>
                    <p className="landing-hero-subhead">Aped eos solupta tureped ut explaut qui
                    

                    debis sum autest parum et et offic</p>
                    <button className="landing-hero-cta">Get Started</button>

                </div>

            </section>

            <section className="landing-feature-intro">

                <h2 className="landing-feature-intro-heading">Sed ut perspiciatis unde omnis iste natus</h2>

                <div className="landing-feature-intro-large">

                    <LandingFeatureContentBlock

                        icon="fa-lightbulb"
                        heading="Ut enim ad minima quis"
                        text="Nostrum exercitationem ullam corporis cipit laboriosam, nisi ut aliquid ex ea commodi ullut ut ex expercitis veliqui"

                    />

                </div>

                <div className="landing-feature-intro-grid">

                    <LandingFeatureContentBlock

                        icon="fa-lightbulb"
                        heading="Ut enim ad minima quis"
                        text="Nostrum exercitationem ullam corporis cipit laboriosam, nisi ut aliquid ex ea commodi"

                    />

                    <LandingFeatureContentBlock

                        icon="fa-lightbulb"
                        heading="Ut enim ad minima quis"
                        text="Nostrum exercitationem ullam corporis cipit laboriosam, nisi ut aliquid ex ea commodi"

                    />

                    <LandingFeatureContentBlock

                        icon="fa-lightbulb"
                        heading="Ut enim ad minima quis"
                        text="Nostrum exercitationem ullam corporis cipit laboriosam, nisi ut aliquid ex ea commodi"

                    />

                    <LandingFeatureContentBlock

                        icon="fa-lightbulb"
                        heading="Ut enim ad minima quis"
                        text="Nostrum exercitationem ullam corporis cipit laboriosam, nisi ut aliquid ex ea commodi"

                    />

                </div>

            </section>

            <div className="campaign-brief-builder-wrapper">

                <CampaignBriefBuilder />

            </div>
            

            <footer className="landing-footer">

                <img src={footerLogo} alt="Brief.io" className="landing-footer-logo" />


            </footer>

        </div>

    )

}

export default Landing