import { useState } from "react"
import "./BriefBuilderStepController.css"
import BriefBuilderProjectInfo from "../BriefBuilderSteps/BriefBuilderProjectInfo"
import BriefBuilderAudience from "../BriefBuilderSteps/BriefBuilderAudience"
import BriefBuilderStrategy from "../BriefBuilderSteps/BriefBuilderStrategy"
import BriefBuilderScope from "../BriefBuilderSteps/BriefBuilderScope"

/* This component renders the progress bar, the correct step component (form section) based on currentStep, and handles the Next/Back navigation.
It receives formData, all handlers, errors, and the final submit handler as props from CampaignBriefBuilder.jsx. */

function BriefBuilderStepController({ formData, handleChange, handleToneChange, handleDeliverablesChange, errors, handleSubmit }) {

    const [currentStep, setCurrentStep] = useState(1)

    const totalSteps = 4

    function goNext() {

        setCurrentStep(function(prevStep) {

            return Math.min(prevStep + 1, totalSteps)

        })

    }

    function goBack() {

        setCurrentStep(function(prevStep) {

            return Math.max(prevStep - 1, 1)

        })

    }

    return (

        <div className="brief-builder-step-controller">

            <div className="brief-builder-progress-bar">

                <div className="brief-builder-progress-bar-fill" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>

            </div>

            {currentStep === 1 && <BriefBuilderProjectInfo formData={formData} handleChange={handleChange} errors={errors} />}
            {currentStep === 2 && <BriefBuilderAudience formData={formData} handleChange={handleChange} errors={errors} />}
            {currentStep === 3 && <BriefBuilderStrategy formData={formData} handleChange={handleChange} handleToneChange={handleToneChange} errors={errors} />}
            {currentStep === 4 && <BriefBuilderScope formData={formData} handleChange={handleChange} handleDeliverablesChange={handleDeliverablesChange} errors={errors} />}

            <div className="brief-builder-step-nav">

                {currentStep > 1 && (

                    <button type="button" className="brief-builder-step-back-button" onClick={goBack}>Back</button>

                )}

                {currentStep < totalSteps && (

                    <button type="button" className="brief-builder-step-next-button" onClick={goNext}>Next</button>

                )}

                {currentStep === totalSteps && (

                    <button type="submit" className="brief-builder-form-button">Generate Brief</button>

                )}

            </div>

        </div>

    )

}

export default BriefBuilderStepController