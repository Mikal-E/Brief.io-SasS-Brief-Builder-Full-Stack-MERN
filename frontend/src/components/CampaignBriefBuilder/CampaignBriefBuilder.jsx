import { useState } from "react"
import "./CampaignBriefBuilder.css"
{/* import BriefBuilderProjectInfo from "../BriefBuilderSteps/BriefBuilderProjectInfo"
import BriefBuilderAudience from "../BriefBuilderSteps/BriefBuilderAudience"
import BriefBuilderStrategy from "../BriefBuilderSteps/BriefBuilderStrategy"
import BriefBuilderScope from "../BriefBuilderSteps/BriefBuilderScope" Imports now line within BriefBuilderStepController.jsx. */}
import BriefBuilderStepController from "../BriefBuilderStepController/BriefBuilderStepController"

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

    const [isSubmitted, setIsSubmitted] = useState(false)

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

        setIsSubmitted(true)

    }

    return (

        <section className="brief-builder-wrapper">

            <div className={isSubmitted ? "brief-builder-header brief-builder-header-output" : "brief-builder-header"}>

                <h1 className="brief-builder-title">Campaign Brief Builder</h1>

            </div>

            <div className="brief-builder-body">

                {!isSubmitted ? (
                
                <>
                    <p className="brief-builder-subtitle">Fill out the fields below to generate your campaign brief.</p>


                    <form id="brief-builder-form" onSubmit={handleSubmit} noValidate>

                        {/* <div>
                            
                            <BriefBuilderProjectInfo formData={formData} handleChange={handleChange} errors={errors} />
                        
                            <BriefBuilderAudience formData={formData} handleChange={handleChange} errors={errors} />

                            <BriefBuilderStrategy formData={formData} handleChange={handleChange} handleToneChange={handleToneChange} errors={errors} />

                            <BriefBuilderScope formData={formData} handleChange={handleChange} handleDeliverablesChange={handleDeliverablesChange} errors={errors} />

                        </div> 
                        
                        Below is the refactor using BriefBuilderStepController to display the individual steps for the multistep experience. */}

                        <BriefBuilderStepController

                            formData={formData}
                            handleChange={handleChange}
                            handleToneChange={handleToneChange}
                            handleDeliverablesChange={handleDeliverablesChange}
                            errors={errors}

                        />

                        {/* <button className="brief-builder-form-button" type="submit">Generate Brief</button> 
                        
                        The button now lives in BriefBuilderStepController.jsx. */}

                    </form>

                </>

                ) : (

                    <div className="brief-builder-output">

                        <div className="brief-builder-output-actions">

                            <div className="brief-builder-output-actions-left">

                                <button type="button" className="brief-builder-regenerate-button" onClick={handleSubmit}>Regenerate Brief</button>
                                <button type="button" className="brief-builder-edit-button" onClick={function() { setIsSubmitted(false) }}>Edit Brief</button>

                            </div>

                            <button type="button" className="brief-builder-card-view-button">Card View</button>

                        </div>

                        <div className="brief-builder-output-content">

                            <div className="brief-output-section">

                                <h3 className="brief-output-section-title">Project Info</h3>
                                <p className="brief-field-label">Project Name</p>
                                <p className="brief-field-value">{formData.projectName}</p>
                                <p className="brief-field-label">Project Type</p>
                                <p className="brief-field-value">{formData.projectType}</p>
                                <p className="brief-field-label">Timeline</p>
                                <p className="brief-field-value">{formData.timeline}</p>

                            </div>

                            <div className="brief-output-section">

                                <h3 className="brief-output-section-title">Audience</h3>
                                <p className="brief-field-label">Target Audience</p>
                                <p className="brief-field-value">{formData.targetAudience}</p>
                                <p className="brief-field-label">Geographic Focus</p>
                                <p className="brief-field-value">{formData.geographicFocus}</p>

                            </div>

                            <div className="brief-output-section">

                                <h3 className="brief-output-section-title">Strategy</h3>
                                <p className="brief-field-label">Objectives</p>
                                <p className="brief-field-value">{formData.objectives}</p>
                                <p className="brief-field-label">Goals</p>
                                <p className="brief-field-value">{formData.goals}</p>
                                <p className="brief-field-label">Tone & Voice</p>
                                <p className="brief-field-value">{formData.toneVoice.join(", ")}</p>

                            </div>

                            <div className="brief-output-section">

                                <h3 className="brief-output-section-title">Scope</h3>
                                <p className="brief-field-label">Key Deliverables</p>
                                <p className="brief-field-value">{formData.keyDeliverables.join(", ")}</p>
                                <p className="brief-field-label">Milestones</p>
                                <p className="brief-field-value">{formData.milestones}</p>
                                <p className="brief-field-label">Additional Information</p>
                                <p className="brief-field-value">{formData.additionalInformation || "None"}</p>

                            </div>

                            <p className="brief-date">Generated: {new Date().toLocaleDateString()}</p>

                        </div>

                    </div>
                )}

            </div>

        </section>

    )

}

export default CampaignBriefBuilder