import "./BriefBuilderProjectInfo.css"

/* This component is for refactoring the original brief builder component/format (CampaignBriefBuilder.jsx) of 1 long form, where the user needs to scroll in order to fill out the entire form,
into a multistep form. The multistep iteration is for a better user experience. This component is the first section of the form - Project Info. */

function BriefBuilderProjectInfo({ formData, handleChange, errors }) {

    return (

        <div className="brief-builder-form-group-section">

            <h2 className="brief-builder-section-label">Project Info</h2>

            <div className="brief-builder-form-group">

                <label htmlFor="brief-builder-project-name">Project Name</label>
                <input
                    type="text"
                    id="project-name"
                    name="projectName"
                    placeholder="e.g. Q3 Brand Awareness Campaign"
                    value={formData.projectName}
                    onChange={handleChange}
                />
                <span className="brief-builder-error-message">{errors.projectName}</span>

            </div>

            <div className="brief-builder-form-group">

                <label htmlFor="brief-builder-project-type">Project Type</label>

                <select
                    id="project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                >

                    <option value="">Select a type...</option>
                    <option value="Campaign">Campaign</option>
                    <option value="Brand Launch">Brand Launch</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Content Series">Content Series</option>
                    <option value="Event">Event</option>

                </select>

                <span className="brief-builder-error-message">{errors.projectType}</span>

            </div>

            <div className="brief-builder-form-group">

                <label htmlFor="brief-builder-timeline">Timeline</label>

                <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                >

                    <option value="">Select a timeline...</option>
                    <option value="2 Weeks">2 Weeks</option>
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>

                </select>

                <span className="brief-builder-error-message">{errors.timeline}</span>

            </div>

            <div className="brief-builder-form-group-row">

                <div className="brief-builder-form-group">

                    <label htmlFor="brief-builder-stakeholder-name">Key Stakeholders and/or Point of Contact</label>
                    <input
                        type="text"
                        id="brief-builder-stakeholder-name"
                        name="stakeholderName"
                        placeholder="Name and job title"
                        value={formData.stakeholderName}
                        onChange={handleChange}
                    />
                    <span className="brief-builder-error-message">{errors.stakeholderName}</span>

                </div>

                <div className="brief-builder-form-group">

                    <label htmlFor="brief-builder-stakeholder-contact">&nbsp;</label>
                    <input
                        type="text"
                        id="brief-builder-stakeholder-contact"
                        name="stakeholderContact"
                        placeholder="Contact information: phone and email"
                        value={formData.stakeholderContact}
                        onChange={handleChange}
                    />
                    <span className="brief-builder-error-message">{errors.stakeholderContact}</span>

                </div>

            </div>

        </div>

    )

}

export default BriefBuilderProjectInfo