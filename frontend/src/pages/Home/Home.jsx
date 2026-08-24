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
                "Every brief, one view, + instant new brief creation",
                "See what's Active, On Hold, or Completed",
                "No status meetings required to know where things stand",
                "Built for teams juggling more than one project at a time"
            ]
        },

        {
            image: briefsDashboard2,
            items: [
                "Add a new brief straight from the dashboard",
                "Status updates in real time, visible to everyone with access",
                "One place to track every campaign in motion",
                "Edit and resave any brief without starting from scratch"
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
                "Your team at a glance",
                "Browse every team member in one searchable view",
                "Find who you need by name, in seconds",
                "No outdated spreadsheet, no guessing who's still on the project"
            ]
        },

        {
            image: teamDashboard2,
            items: [
                "Know who is who with general details",
                "Click into any profile for role, department, and contact info",
                "Invite new team members directly from the directory",
                "Built for small teams and those that continue to grow"
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
                "Know what changed, without asking",
                "Status changes, assignments, and comments as they happen",
                "Every update tied to the brief and the person behind it",
                "Unread activities flagged, so nothing slips past"
            ]
        },

        {
            image: activitiesDashboard2,
            items: [
                "All real context and no noise",
                "A feed built around your briefs and not a general inbox",
                "Catch reassignments or status changes with no surprises",
                "No more uncertainties when returning from time off"
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

                    <h1 className="hero-headline">From raw ideas to
                    <br />
                    clean airtight briefs</h1>
                    <p className="hero-subhead">Brief.io turns scattered notes and docs
                    <br />
                    into a unified brief for optimal clarity </p>
                    <Link to="/register" className="hero-cta">Try It Free</Link>

                </div>

            </section>

            <section className="section-intro">

                <h2 className="section-heading">No templates to hunt for or formatting to fix, just a perfectly outlined brief</h2>

                <div className="section-intro-image">

                <img src={section1IntroImage} alt="Placeholder" className="section-image" />

                </div>

            </section>

            <FeatureBlock

                image={projectInfo}
                imageAlt="Placeholder"
                heading="Start With the Basics"
                items={[

                        "Name your project and easily find it later without digging through folders",
                        "Choose from a range of campaign types, or define your own",
                        "Set a timeline from common ranges or enter a custom timelines",
                        "Add key stakeholders and/or point of contacts"

                ]}

            />

            <FeatureBlock

                image={audience}
                imageAlt="Placeholder"
                heading="Drill Down Targeting"
                items={[

                        "Define target audience demographics, behaviors, and more",
                        "Set your geographic focus, from hyper-local to global",
                        "Identify pain points to connect with audiences and move the needle",
                        "The more specific the input, the sharper the brief"

                ]}

                reverse={true}

            />

            <FeatureBlock

                image={strategy}
                imageAlt="Placeholder"
                heading="Align Execution to Goals"
                items={[

                        "Clarify initiative objectives that ladder up to the bigger goal",
                        "Define what success actually looks like",
                        "Stay true to your brand's voice",
                        "Pinpoint how the initiative should be delivered and received"

                ]}

            />

            <FeatureBlock

                image={scope}
                imageAlt="Placeholder"
                heading="Map Out the Work"
                items={[

                        "Choose key deliverables from social, video, print, and beyond",
                        "Lay out milestones from kickoff to close",
                        "Include additional pertinent info your team should know",
                        "Let the magic happen and generate your brief"

                ]}

                reverse={true}

            />

            <TabbedFeatureDocOutput />

            <ThreeColumnFeature />

            <section className="section-intro">

                <h2 className="section-heading">Elevate your team's alignment and execution with the power of Brief.io</h2>

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
                heading="Enable your team with rock-solid briefs"
                subheading="Execute internal or external-facing initiatives with optimal clarity, alignment, and efficiency"
                ctaText="Try It Free"

            />

            <Reviews />

        </div>

    )

}

export default HomePage