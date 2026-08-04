import "./CtaBlock.css"

/* This is the CTA block that sits above the reviews at the bottom of the Home.jsx page. It is also used on Landing.jsx and therefore controlled by props. */

function CtaBlock({ image, imageAlt, heading, subheading, ctaText }) {

    return (

        <section className="cta-block">

            <div className="cta-block-content">

                <h2 className="cta-block-heading">{heading}</h2>
                <p className="cta-block-subheading">{subheading}</p>
                <button className="cta-block-button">{ctaText}</button>

            </div>

            <div className="cta-block-image">

                <img src={image} alt={imageAlt} className="cta-block-img" />

            </div>

        </section>

    )

}

export default CtaBlock