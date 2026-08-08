import "./PricingCards.css"
import "../../styles/section-heading.css"
import { Link } from "react-router-dom";

/* This is the PricingCards component for the pricing section right below the hero in Pricing.jsx.
Elected to use ternary operator in the classNames this time unlike TabbedFeatureDocOutput.jsx where class names
were stored in variables, and if statements were used to flip the class. Finally wrapped my head around it enough to use. */

const plans = [

    {
        name: "Free",
        price: "$0",
        description: "Always free",
        cta: "Get Started",
        highlighted: false,
        features: [
            "Build unlimited campaign briefs with the full Project Info, Audience, Strategy, and Scope builder",
            "Switch between Document View and Card View",
            "Regenerate or edit any brief after it's created",
            "Export a single brief as PDF"
        ]
    },

    {
        name: "Starter",
        price: "$15",
        description: "Everything in Free, plus:",
        cta: "Start Free Trial",
        highlighted: true,
        features: [
            "Team Directory — invite members, manage profiles, search your team",
            "Briefs Dashboard — track every project's status in one place",
            "Assign briefs to specific team members",
            "Unlimited PDF exports",
            "Up to 10 team members"
        ]
    },

    {
        name: "Pro",
        price: "$25",
        description: "Everything in Starter, plus:",
        cta: "Start Free Trial",
        highlighted: false,
        features: [
            "Activity & Notifications — real-time feed of status changes, assignments, and comments",
            "Unread activity flagged across the team",
            "Priority AI-generated brief output (faster generation, refined drafting)",
            "Unlimited team members",
            "Priority support"
        ]
    }

]

function PricingCards() {

    return (

        <section className="pricing-cards">

            <h2 className="section-heading">Omnis iste natus enim ipsam luptatem</h2>

            <div className="pricing-cards-grid">

                {plans.map((plan, index) => (

                    <div className={`pricing-card ${plan.highlighted ? "pricing-card-highlighted" : ""}`} key={index}>

                        <h3 className="pricing-card-name">{plan.name}</h3>
                        <p className="pricing-card-price">{plan.price} <span>/mo</span></p>
                        <p className="pricing-card-description">{plan.description}</p>
                        <Link to="/register" className="pricing-card-button">{plan.cta}</Link>

                        <ul className="pricing-card-features">

                            {plan.features.map((feature, i) => (

                                <li key={i}>

                                    <i className="fa-solid fa-circle-check"></i> {feature}

                                </li>

                            ))}

                        </ul>

                    </div>

                ))}

            </div>

        </section>

    )

}

export default PricingCards