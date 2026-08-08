import "./Landing.css"
import "../../styles/section-heading.css"
import landscape from "../../assets/landscape.jpg"
import square from "../../assets/square.jpg"
import LandingFeatureContentBlock from "../../components/LandingFeatureContentBlock/LandingFeatureContentBlock"
import CampaignBriefBuilder from "../../components/CampaignBriefBuilder/CampaignBriefBuilder"
import DocOutputPreview from "../../components/DocOutputPreview/DocOutputPreview"
import ThreeColumnFeature from "../../components/ThreeColumnFeature/ThreeColumnFeature"
import TrustedLogos from "../../components/TrustedLogos/TrustedLogos"
import CtaBlock from "../../components/CtaBlock/CtaBlock"
import footerLogo from "../../assets/brief.io-logo-placeholder.png"
import { Link } from "react-router-dom";

/* This is a landing page for marketing and therefor is not linked to the website's navigation. It also strips away clicking of a logo
to redirect a user back to the home page and the footer links as well, to remove exititng attempts and distractions. */

function Landing() {

    return (

        <div className="landing-page">

            <section className="landing-hero" style={{ backgroundImage: `url(${landscape})` }}>

                <img src={footerLogo} alt="Brief.io" className="landing-hero-logo" />

                <div className="landing-hero-content">

                    <h1 className="landing-hero-headline">Ra que verist et
                    

                    omniet a ducipitis di</h1>
                    <p className="landing-hero-subhead">Aped eos solupta tureped ut explaut qui
                    

                    debis sum autest parum et et offic</p>
                    <Link to="/register" className="hero-cta">Get Started</Link>

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

            <section className="landing-brief-intro">

                <h2 className="section-heading">Sed ut perspiciatis unde omnis iste natus</h2>

                <p className="landing-brief-intro-subheading">Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit amet consectetur adipiscing elit</p>

            </section>

            <div className="campaign-brief-builder-wrapper">

                <CampaignBriefBuilder />

            </div>

            <DocOutputPreview />

            <ThreeColumnFeature />
            
            <TrustedLogos />

            <CtaBlock

                image={square}
                imageAlt="Placeholder"
                heading="Omnis iste natus enim ipsam luptatem"
                subheading="Ut enim ad minima quis Nostrum exercitationem ullam corporis suscipit laboriosam"
                ctaText="Get Started"

            />

            <footer className="landing-footer">

                <img src={footerLogo} alt="Brief.io" className="landing-footer-logo" />


            </footer>

        </div>

    )

}

export default Landing