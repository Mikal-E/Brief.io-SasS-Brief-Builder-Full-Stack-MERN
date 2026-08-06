import { useState } from "react"
import "./CampaignBriefBuilder.css"

/* CampaignBriefBuilder.jsx is the brief builder users put their campaign information into, in order to have a brief generated.
It starts with a form and when submitted produces a document. It is the core product of Brief.io. */

function CampaignBriefBuilder() {

    const [formData, setFormData] = useState({

        projectName: "",
        projectType: "",
        timeline: "",
        targetAudience: "",
        geographicFocus: "",
        objectives: "",
        goals: "",
        toneVoice: [],
        keyDeliverables: [],
        milestones: "",
        additionalInformation: "",

    })

    const [errors, setErrors] = useState({})

    function handleChange(event) {

        const { name, value } = event.target

        setFormData(function(prevData) {

            return { ...prevData, [name]: value }

        })

    }

    function handleToneChange(event) {

    const { value, checked } = event.target

    setFormData(function(prevData) {

        if (checked) {

            return { ...prevData, toneVoice: [...prevData.toneVoice, value] }

        } else {

            return { ...prevData, toneVoice: prevData.toneVoice.filter(function(item) { return item !== value }) }

        }

    })

    }

    function handleDeliverablesChange(event) {

        const { value, checked } = event.target

        setFormData(function(prevData) {

            if (checked) {

                return { ...prevData, keyDeliverables: [...prevData.keyDeliverables, value] }

            } else {

                return { ...prevData, keyDeliverables: prevData.keyDeliverables.filter(function(item) { return item !== value }) }

            }

        })

    }

    function handleSubmit(event) {

        event.preventDefault()

        const newErrors = {}

        if (formData.projectName === "") {
            newErrors.projectName = "Please provide a project name."
        }

        if (formData.projectType === "") {
            newErrors.projectType = "Please select a project type."
        }

        if (formData.timeline === "") {
            newErrors.timeline = "Please select a timeline."
        }

        if (formData.targetAudience === "") {
            newErrors.targetAudience = "Please provide the target audience."
        }

        if (formData.geographicFocus === "") {
            newErrors.geographicFocus = "Please provide the target area/s."
        }

        if (formData.objectives === "") {
            newErrors.objectives = "Please provide your objectives."
        }

        if (formData.goals === "") {
            newErrors.goals = "Please provide your goals."
        }

        if (formData.toneVoice.length === 0) {
            newErrors.toneVoice = "Please select preferred tone and voice."
        }

        if (formData.keyDeliverables.length === 0) {
            newErrors.keyDeliverables = "Please select your preferred deliverables."
        }

        if (formData.milestones === "") {
            newErrors.milestones = "Please provide your milestones."
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return
        }

        console.log(formData)

    }

    return (

        <section className="brief-builder-wrapper">

            <div className="brief-builder-header">

                <h1 className="brief-builder-title">Campaign Brief Builder</h1>

            </div>

            <div className="brief-builder-body">

                <p className="brief-builder-subtitle">Fill out the fields below to generate your campaign brief.</p>

                <form id="brief-builder-form" onSubmit={handleSubmit} noValidate>

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

                        <div className="brief-builder-form-group-section">

                            <h2 className="brief-builder-section-label">Audience</h2>

                            <div className="brief-builder-form-group">

                                <label htmlFor="brief-builder-target-audience">Target Audience</label>

                                <textarea

                                    id="brief-builder-target-audience"
                                    name="targetAudience"
                                    rows="4"
                                    placeholder="Who your campaign is for. Demographics"
                                    value={formData.targetAudience}
                                    onChange={handleChange}>

                                </textarea>

                                <span className="brief-builder-error-message">{errors.targetAudience}</span>

                            </div>

                            <div className="brief-builder-form-group">

                                <label htmlFor="brief-builder-geographic-focus">Geographic Focus</label>

                                <input
                                    type="text"
                                    id="brief-builder-geographic-focus"
                                    name="geographicFocus"
                                    placeholder="Targeting area: local, region, national, global."
                                    value={formData.geographicFocus}
                                    onChange={handleChange}
                                />

                                <span className="brief-builder-error-message">{errors.geographicFocus}</span>

                            </div>

                        </div>

                        <div className="brief-builder-form-group-section">

                            <h2 className="brief-builder-section-label">Strategy</h2>

                            <div className="brief-builder-form-group">

                                <label htmlFor="brief-builder-objectives">Objectives</label>

                                <textarea

                                    id="brief-builder-objectives"
                                    name="objectives"
                                    rows="4"
                                    placeholder="Purpose of campaign as it relates to overall goal."
                                    value={formData.objectives}
                                    onChange={handleChange}>

                                </textarea>

                                <span className="brief-builder-error-message">{errors.objectives}</span>

                            </div>

                            <div className="brief-builder-form-group">

                                <label htmlFor="brief-builder-goals">Goals</label>

                                <textarea

                                    id="brief-builder-goals"
                                    name="goals"
                                    rows="4"
                                    placeholder="What you are trying to accomplish overall."
                                    value={formData.goals}
                                    onChange={handleChange}>

                                </textarea>

                                <span className="brief-builder-error-message">{errors.goals}</span>

                            </div>

                            <fieldset className="brief-builder-checkbox-group" id="brief-builder-tone-fieldset">

                                <legend>Tone & Voice</legend>

                                <div className="brief-builder-checkbox-item">
                                    
                                    <input type="checkbox" id="brief-builder-bold" name="bold" checked={formData.toneVoice.includes("Bold")} onChange={handleToneChange} />
                                    <label htmlFor="brief-builder-bold">Bold</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-minimal" name="minimal" checked={formData.toneVoice.includes("Minimal")} onChange={handleToneChange} />
                                    <label htmlFor="brief-builder-minimal">Minimal</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-playful" name="playful" checked={formData.toneVoice.includes("Playful")} onChange={handleToneChange} />
                                    <label htmlFor="brief-builder-playful">Playful</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-elevated" name="elevated" checked={formData.toneVoice.includes("Elevated")} onChange={handleToneChange} />
                                    <label htmlFor="brief-builder-elevated">Elevated</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-urgent" name="urgent" checked={formData.toneVoice.includes("Urgent")} onChange={handleToneChange} />
                                    <label htmlFor="brief-builder-urgent">Urgent</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-conversational" name="conversational" checked={formData.toneVoice.includes("Conversational")} onChange={handleToneChange} />
                                    <label htmlFor="brief-builder-conversational">Conversational</label>

                                </div>

                            </fieldset>

                            <span className="brief-builder-error-message">{errors.toneVoice}</span>

                        </div>

                        <div className="brief-builder-form-group-section">

                            <h2 className="brief-builder-section-label">Scope</h2>

                            <fieldset className="brief-builder-checkbox-group" id="brief-builder-deliverables-fieldset">

                                <legend>Key Deliverables</legend>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-social-assets" name="social-assets" value="Social Assets" checked={formData.keyDeliverables.includes("Social Assets")} onChange={handleDeliverablesChange} />
                                    <label htmlFor="brief-builder-social-assets">Social Assets</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-display-banners" name="display-banners" value="Display Banners" checked={formData.keyDeliverables.includes("Display Banners")} onChange={handleDeliverablesChange} />
                                    <label htmlFor="brief-builder-display-banners">Display Banners</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-email" name="email" value="Email" checked={formData.keyDeliverables.includes("Email")} onChange={handleDeliverablesChange} />
                                    <label htmlFor="brief-builder-email">Email</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-video" name="video" value="Video" checked={formData.keyDeliverables.includes("Video")} onChange={handleDeliverablesChange} />
                                    <label htmlFor="brief-builder-video">Video</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-landing-page" name="landing-page" value="Landing Page" checked={formData.keyDeliverables.includes("Landing Page")} onChange={handleDeliverablesChange} />
                                    <label htmlFor="brief-builder-landing-page">Landing Page</label>

                                </div>

                                <div className="brief-builder-checkbox-item">

                                    <input type="checkbox" id="brief-builder-print" name="print" value="Print" checked={formData.keyDeliverables.includes("Print")} onChange={handleDeliverablesChange} />
                                    <label htmlFor="brief-builder-print">Print</label>

                                </div>

                            </fieldset>

                            <span className="brief-builder-error-message">{errors.keyDeliverables}</span>

                            <div className="brief-builder-form-group">

                                <label htmlFor="brief-builder-milestones">Milestones</label>

                                <textarea

                                    id="brief-builder-milestones"
                                    name="milestones"
                                    rows="5"
                                    placeholder="1. Initiation: Key Events - Goal - 2. Planning:... 3. Execution:... 4. Closure:... ."
                                    value={formData.milestones}
                                    onChange={handleChange}>

                                </textarea>

                                <span className="brief-builder-error-message">{errors.milestones}</span>

                            </div>

                            <div className="brief-builder-form-group">

                                <label htmlFor="brief-builder-additional-information">Additional Information</label>

                                <textarea

                                    id="brief-builder-additional-information"
                                    name="additionalInformation"
                                    rows="3"
                                    placeholder="Optional: additional information to provide for your brief."
                                    value={formData.additionalInformation}
                                    onChange={handleChange}>

                                </textarea>

                                <span className="brief-builder-error-message">{errors.additionalInformation}</span>

                            </div>

                        </div>

                    </div>

                    <button className="brief-builder-form-button" type="submit">Generate Brief</button>

                </form>

            </div>

        </section>

    )

}

export default CampaignBriefBuilder