import "./LandingFeatureContentBlock.css"

function LandingFeatureContentBlock({ icon, heading, text }) {

    return (

        <div className="landing-feature-content-block">

            <i className={`fa-solid ${icon}`}></i>

            <h3 className="landing-feature-content-block-heading">{heading}</h3>

            <p className="landing-feature-content-block-text">{text}</p>

        </div>

    )

}

export default LandingFeatureContentBlock