import "./BriefBuilderScope.css"

/* This component is for refactoring the original brief builder component/format (CampaignBriefBuilder.jsx) of 1 long form, where the user needs to scroll in order to fill out the entire form,
into a multistep form. The multistep iteration is for a better user experience. This component is the third section of the form - Scope. */

function BriefBuilderScope({ formData, handleChange, handleDeliverablesChange, errors }) {

    return (

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

    )

}

export default BriefBuilderScope