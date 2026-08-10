import "./Home.css"
import "../../styles/hero.css"
import "../../styles/section-heading.css"
import landscape from "../../assets/landscape.jpg"
import headerMockup from "../../assets/header-mockup.jpg"
import section1IntroImage from "../../assets/section-1-intro-image.jpg"
import projectInfo from "../../assets/project-info.png"
import audience from "../../assets/audience.png"
import strategy from "../../assets/strategy.png"
import scope from "../../assets/scope.png"
import team from "../../assets/young-creative-people-in-modern-office.jpg"
import briefsDashboard1 from "../../assets/briefs-dashboard-1.jpg"
import briefsDashboard2 from "../../assets/briefs-dashboard-2.jpg"
import briefsDashboard3 from "../../assets/briefs-dashboard-3.jpg"
import teamDashboard1 from "../../assets/team-dashboard-1.jpg"
import teamDashboard2 from "../../assets/team-dashboard-2.jpg"
import teamDashboard3 from "../../assets/team-dashboard-3.jpg"
import activitiesDashboard1 from "../../assets/activities-dashboard-1.jpg"
import activitiesDashboard2 from "../../assets/activities-dashboard-2.jpg"
import activitiesDashboard3 from "../../assets/activities-dashboard-3.jpg"
import cta from "../../assets/cta.jpg"
import square from "../../assets/square.jpg"
import portrait from "../../assets/portrait.jpg"
import FeatureBlock from "../../components/FeatureBlock/FeatureBlock"
import TabbedFeatureDocOutput from "../../components/TabbedFeatureDocOutput/TabbedFeatureDocOutput"
import ThreeColumnFeature from "../../components/ThreeColumnFeature/ThreeColumnFeature"
import TabbedFeatureDashboard from "../../components/TabbedFeatureDashboard/TabbedFeatureDashboard"
import CtaBlock from "../../components/CtaBlock/CtaBlock"
import Reviews from "../../components/Reviews/Reviews"
import { Link } from "react-router-dom";

function HomePage() {

    const briefsTabContent = [

        {
            image: briefsDashboard1,
            items: [
                "1. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "2. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "3. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "4. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: briefsDashboard2,
            items: [
                "5. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "6. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "7. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "8. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: briefsDashboard3,
            items: [
                "9. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "10. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "11. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "12. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        }

    ]

    const teamTabContent = [

        {
            image: teamDashboard1,
            items: [
                "1. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "2. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "3. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "4. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: teamDashboard2,
            items: [
                "5. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "6. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "7. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "8. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: teamDashboard3,
            items: [
                "9. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "10. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "11. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "12. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        }

    ]

    const activityTabContent = [

        {
            image: activitiesDashboard1,
            items: [
                "1. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "2. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "3. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "4. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: activitiesDashboard2,
            items: [
                "5. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "6. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "7. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "8. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        },

        {
            image: activitiesDashboard3,
            items: [
                "9. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "10. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "11. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit",
                "12. Nemo enim ipsam voluptatem quia Lorem ipsum dolor sit"
            ]
        }

    ]

    return (

        <div>

            <section className="hero" style={{ backgroundImage: `url(${headerMockup})` }}>

                <div className="hero-content">

                    <h1 className="hero-headline">Ra que verist et
                    <br />
                    omniet a ducipitis di</h1>
                    <p className="hero-subhead">Aped eos solupta tureped ut explaut qui
                    <br />
                    debis sum autest parum et et offic</p>
                    <Link to="/register" className="hero-cta">Get Started</Link>

                </div>

            </section>

            <section className="section-intro">

                <h2 className="section-heading">Sed ut perspiciatis unde omnis iste natus</h2>

                <div className="section-intro-image">

                <img src={section1IntroImage} alt="Placeholder" className="section-image" />

                </div>

            </section>

            <FeatureBlock

                image={projectInfo}
                imageAlt="Placeholder"
                heading="Ut enim ad minima quis"
                items={[

                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia"

                ]}

            />

            <FeatureBlock

                image={audience}
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

                image={strategy}
                imageAlt="Placeholder"
                heading="Ut enim ad minima quis"
                items={[

                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia",
                        "Nemo enim ipsam voluptatem quia"

                ]}

            />

            <FeatureBlock

                image={scope}
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

                    <img src={team} alt="Placeholder" className="section-image" />

                </div>

            </section>

            <TabbedFeatureDashboard tabContent={briefsTabContent} />
            <TabbedFeatureDashboard tabContent={teamTabContent} />
            <TabbedFeatureDashboard tabContent={activityTabContent} />

            <CtaBlock

                image={cta}
                imageAlt="Placeholder"
                heading="Omnis iste natus enim ipsam luptatem"
                subheading="Ut enim ad minima quis Nostrum exercitationem ullam corporis suscipit laboriosam"
                ctaText="Get Started"

            />

            <Reviews />

        </div>

    )

}

export default HomePage