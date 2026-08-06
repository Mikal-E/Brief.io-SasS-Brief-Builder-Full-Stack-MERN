import "./Landing.css"
import CampaignBriefBuilder from "../../components/CampaignBriefBuilder/CampaignBriefBuilder"
import footerLogo from "../../assets/brief.io-logo-placeholder.png"

/* This is a landing page for marketing and therefor is not linked to the website's navigation. It also strips away clicking of a logo
to redirect a user back to the home page and the footer links as well, to remove exititng attempts and distractions. */

function Landing() {

    return (

        <div>

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