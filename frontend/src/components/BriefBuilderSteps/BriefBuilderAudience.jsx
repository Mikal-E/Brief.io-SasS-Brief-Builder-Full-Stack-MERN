/* This component is for refactoring the original brief builder component/format (CampaignBriefBuilder.jsx) of 1 long form, where the user needs to scroll in order to fill out the entire form,
into a multistep form. The multistep iteration is for a better user experience. This component is the second section of the form - Audience. */

function BriefBuilderAudience({ formData, handleChange, handlePainPointsChange, errors }) {

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

            <fieldset className="brief-builder-checkbox-group" id="brief-builder-pain-points-fieldset">

                <legend>Pain Points</legend>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-unclear-objectives" name="unclear-objectives" value="Unclear Objectives or Success Metrics" checked={formData.painPoints.includes("Unclear Objectives or Success Metrics")} onChange={handlePainPointsChange} />
                    <label htmlFor="brief-builder-unclear-objectives">Unclear Objectives or Success Metrics</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-budget-constraints" name="budget-constraints" value="Budget Constraints" checked={formData.painPoints.includes("Budget Constraints")} onChange={handlePainPointsChange} />
                    <label htmlFor="brief-builder-budget-constraints">Budget Constraints</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-tight-timeline" name="tight-timeline" value="Tight or Shifting Timeline" checked={formData.painPoints.includes("Tight or Shifting Timeline")} onChange={handlePainPointsChange} />
                    <label htmlFor="brief-builder-tight-timeline">Tight or Shifting Timeline</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-misaligned-stakeholders" name="misaligned-stakeholders" value="Misaligned Stakeholders" checked={formData.painPoints.includes("Misaligned Stakeholders")} onChange={handlePainPointsChange} />
                    <label htmlFor="brief-builder-misaligned-stakeholders">Misaligned Stakeholders</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-unclear-audience" name="unclear-audience" value="Unclear Target Audience" checked={formData.painPoints.includes("Unclear Target Audience")} onChange={handlePainPointsChange} />
                    <label htmlFor="brief-builder-unclear-audience">Unclear Target Audience</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-inconsistent-messaging" name="inconsistent-messaging" value="Inconsistent Brand Messaging" checked={formData.painPoints.includes("Inconsistent Brand Messaging")} onChange={handlePainPointsChange} />
                    <label htmlFor="brief-builder-inconsistent-messaging">Inconsistent Brand Messaging</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-limited-resources" name="limited-resources" value="Limited Internal Resources/Bandwidth" checked={formData.painPoints.includes("Limited Internal Resources/Bandwidth")} onChange={handlePainPointsChange} />
                    <label htmlFor="brief-builder-limited-resources">Limited Internal Resources/Bandwidth</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-measuring-results" name="measuring-results" value="Difficulty Measuring Past Campaign Results" checked={formData.painPoints.includes("Difficulty Measuring Past Campaign Results")} onChange={handlePainPointsChange} />
                    <label htmlFor="brief-builder-measuring-results">Difficulty Measuring Past Campaign Results</label>
                    
                </div>

            </fieldset>

            <span className="brief-builder-error-message">{errors.painPoints}</span>

        </div>

    )

}

export default BriefBuilderAudience

