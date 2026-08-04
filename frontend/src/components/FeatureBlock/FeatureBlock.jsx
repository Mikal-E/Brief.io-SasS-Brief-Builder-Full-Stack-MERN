import "./FeatureBlock.css"

/* This is the component that makes up the section right after the intro under the hero. There are four staggered element blocks of an
image on one side, and accompanying text next to the image. The component handles all 4 staggered element blocks and is controlled by props. */

function FeatureBlock({ image, imageAlt, heading, items, reverse }) {

    let sectionClass = "feature-block"

    if (reverse) {
        sectionClass = "feature-block feature-block-reverse"
    }

    return (

        <section className={sectionClass}>

            <div className="feature-block-image">

                <img src={image} alt={imageAlt} />

            </div>

            <div className="feature-block-text">

                <h3 className="feature-block-heading">{heading}</h3>

                <ul className="feature-block-list">
                    
                    {items.map((item, index) => (
                        
                        <li key={index}><i className="fa-solid fa-circle-check"></i>{item}</li>
                        
                    ))}

                </ul>

            </div>

        </section>

    )

}

export default FeatureBlock