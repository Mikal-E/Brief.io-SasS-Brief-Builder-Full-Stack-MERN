import "./BriefBuilderAudience.css"

/* This component is for refactoring the original brief builder component/format (CampaignBriefBuilder.jsx) of 1 long form, where the user needs to scroll in order to fill out the entire form,
into a multistep form. The multistep iteration is for a better user experience. This component is the second section of the form - Audience. */

function BriefBuilderAudience({ formData, handleChange, errors }) {

    return (

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

    )

}

export default BriefBuilderAudience

