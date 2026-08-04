import "./Home.css"
import "../../styles/hero.css"
import "../../styles/section-heading.css"
import landscape from "../../assets/landscape.jpg"
import square from "../../assets/square.jpg"
import portrait from "../../assets/portrait.jpg"
import FeatureBlock from "../../components/FeatureBlock/FeatureBlock"
import TabbedFeatureDocOutput from "../../components/TabbedFeatureDocOutput/TabbedFeatureDocOutput"
import ThreeColumnFeature from "../../components/ThreeColumnFeature/ThreeColumnFeature"
import TabbedFeatureDashboard from "../../components/TabbedFeatureDashboard/TabbedFeatureDashboard"
import CtaBlock from "../../components/CtaBlock/CtaBlock"
import Reviews from "../../components/Reviews/Reviews"

function HomePage() {

    const briefsTabContent = [

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        }

    ]

    const teamTabContent = [

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        }

    ]

    const activityTabContent = [

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: landscape,
            items: [
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        }

    ]

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

            <FeatureBlock

                image={square}
                imageAlt="Placeholder"
                heading="Ut enim ad minima quis"
                items={[

                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia"

                ]}

            />

            <FeatureBlock

                image={square}
                imageAlt="Placeholder"
                heading="Ut enim ad minima quis"
                items={[

                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia"

                ]}

                reverse={true}

            />

            <FeatureBlock

                image={square}
                imageAlt="Placeholder"
                heading="Ut enim ad minima quis"
                items={[

                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia"

                ]}

            />

            <FeatureBlock

                image={square}
                imageAlt="Placeholder"
                heading="Ut enim ad minima quis"
                items={[

                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia"

                ]}

                reverse={true}

            />

            <TabbedFeatureDocOutput />

            <ThreeColumnFeature />

            <section className="section-intro">

                <h2 className="section-heading">Sed ut perspiciatis unde omnis iste natus</h2>

                <div className="section-intro-image">

                    <img src={landscape} alt="Placeholder" className="section-image" />

                </div>

            </section>

            <TabbedFeatureDashboard tabContent={briefsTabContent} />
            <TabbedFeatureDashboard tabContent={teamTabContent} />
            <TabbedFeatureDashboard tabContent={activityTabContent} />

            <CtaBlock

                image={square}
                imageAlt="Placeholder"
                heading="Omnis iste natus enim ipsam luptatem"
                subheading="Ut enim ad minima quis Nostrum exercitationem ullam corporis suscipit laboriosam"
                ctaText="BUTTON CTA"

            />

            <Reviews />

        </div>

    )

}

export default HomePage