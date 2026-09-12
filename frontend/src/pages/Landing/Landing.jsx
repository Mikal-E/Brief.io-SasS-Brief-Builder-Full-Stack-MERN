import "./Landing.css"
import "../../styles/section-heading.css"
import landscape from "../../assets/landscape.jpg"
import square from "../../assets/square.jpg"
import headerMockupAlt700 from "../../assets/header-mockup-alt-1-700.jpg"
import cta from "../../assets/cta.jpg"
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

            <section className="landing-hero" style={{ backgroundImage: `url(${headerMockupAlt700})` }}>

                <img src={footerLogo} alt="Brief.io" className="landing-hero-logo" />

                <div className="landing-hero-content">

                    <h1 className="landing-hero-headline">Witness the power of Brief.io
                        <br />
                        for free prior to signing up</h1>
                    <p className="landing-hero-subhead">Fill it out below. Watch it instantly generate.</p>
                    <Link to="/register" className="hero-cta">Try It Free</Link>

                </div>

            </section>

            <section className="landing-feature-intro">

                <h2 className="landing-feature-intro-heading">Go from raw ideas to clean airtight
                <br />
                briefs. Turn scattered docs into
                <br />
                a unified brief.</h2>

                <div className="landing-feature-intro-large">

                    <LandingFeatureContentBlock

                        icon="fa-file-lines"
                        heading="Start With the Basics"
                        text="Name your project and easily find it later without digging through folders. Choose the campaign type, timeline, and add key stakeholders."

                    />

                </div>

                <div className="landing-feature-intro-grid">

                    <div className="landing-feature-intro-small">
                    <LandingFeatureContentBlock

                        icon="fa-users-viewfinder"
                        heading="Drill Down The Targeting"
                        text="Define the target audience, geographic focus, and identify your audience's pain points for precise targeting."

                    />
                    </div>

                    <div className="landing-feature-intro-small">
                    <LandingFeatureContentBlock

                        icon="fa-chart-line"
                        heading="Align Execution to Goals"
                        text="Clarify initiative objectives, define clear goals and what success actually looks like, specify tone and voice. "

                    />
                    </div>

                    <div className="landing-feature-intro-small">
                    <LandingFeatureContentBlock

                        icon="fa-chart-gantt"
                        heading="Map Out the Initiative's Work"
                        text="Choose key deliverables, lay out your milestones, include additional pertinent info, and generate your brief."

                    />
                    </div>

                    <div className="landing-feature-intro-small">
                    <LandingFeatureContentBlock

                        icon="fa-ranking-star"
                        heading="Brief.io Packed With Features"
                        text="Fast creation and editing. AI-Powered brief generation. Dashboards for briefs, team management, and notifications."

                    />
                    </div>

                </div>

            </section>

            <section className="landing-brief-intro">

                <h2 className="section-heading">Create your next brief in minutes </h2>

                <p className="landing-brief-intro-subheading">After generating your brief, quickly sign up to gain access to more features</p>

            </section>

            <div className="campaign-brief-builder-wrapper">

                <CampaignBriefBuilder />

            </div>

            <DocOutputPreview />

            <ThreeColumnFeature />
            
            <TrustedLogos />

            <CtaBlock

                image={cta}
                imageAlt="Placeholder"
                heading="Enable your team with rock-solid briefs"
                subheading="Execute internal or external-facing initiatives with optimal clarity, alignment, and efficiency"
                ctaText="Try It Free"

            />

            <footer className="landing-footer">

                <img src={footerLogo} alt="Brief.io" className="landing-footer-logo" />


            </footer>

        </div>

    )

}

export default Landing