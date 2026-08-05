import "./PricingTable.css"

const featureGroups = [

    {
        groupLabel: "Free features",
        features: [
            { name: "Build unlimited campaign briefs with the full Project Info, Audience, Strategy, and Scope builder", free: true, starter: true, pro: true },
            { name: "Switch between Document View and Card View", free: true, starter: true, pro: true },
            { name: "Regenerate or edit any brief after it's created", free: true, starter: true, pro: true },
            { name: "Export a single brief as PDF", free: true, starter: true, pro: true }
        ]
    },

    {
        groupLabel: "Starter adds",
        features: [
            { name: "Team Directory — invite members, manage profiles, search your team", free: false, starter: true, pro: true },
            { name: "Briefs Dashboard — track every project's status in one place", free: false, starter: true, pro: true },
            { name: "Assign briefs to specific team members", free: false, starter: true, pro: true },
            { name: "Unlimited PDF exports", free: false, starter: true, pro: true },
            { name: "Up to 10 team members", free: false, starter: true, pro: true }
        ]
    },

    {
        groupLabel: "Pro adds",
        features: [
            { name: "Activity & Notifications — real-time feed of status changes, assignments, and comments", free: false, starter: false, pro: true },
            { name: "Unread activity flagged across the team", free: false, starter: false, pro: true },
            { name: "Priority AI-generated brief output (faster generation, refined drafting)", free: false, starter: false, pro: true },
            { name: "Unlimited team members", free: false, starter: false, pro: true },
            { name: "Priority support", free: false, starter: false, pro: true }
        ]
    }

]

function PricingTable() {

    return (

        <section className="pricing-table">

            <table>

                <thead>

                    <tr>

                        <th className="pricing-table-feature-col">Features</th>
                        <th>Free <span>$0 /mo</span></th>
                        <th className="pricing-table-starter-col">Starter <span>$15 /mo</span></th>
                        <th>Pro <span>$25 /mo</span></th>

                    </tr>

                </thead>

                <tbody>

                    {featureGroups.map((group, groupIndex) => (

                        <>

                            <tr className="pricing-table-group-row" key={`group-${groupIndex}`}>

                                <td colSpan="4">{group.groupLabel}</td>

                            </tr>

                            {group.features.map((feature, featureIndex) => (

                                <tr key={`feature-${groupIndex}-${featureIndex}`}>

                                    <td className="pricing-table-feature-col">{feature.name}</td>

                                    <td>

                                        <i className={feature.free ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark"}></i>

                                    </td>

                                    <td className="pricing-table-starter-col">

                                        <i className={feature.starter ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark"}></i>

                                    </td>

                                    <td>

                                        <i className={feature.pro ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark"}></i>

                                    </td>

                                </tr>

                            ))}

                        </>

                    ))}

                </tbody>

            </table>

        </section>

    )

}

export default PricingTable