import "./BriefBuilderStrategy.css"

/* This component is for refactoring the original brief builder component/format (CampaignBriefBuilder.jsx) of 1 long form, where the user needs to scroll in order to fill out the entire form,
into a multistep form. The multistep iteration is for a better user experience. This component is the third section of the form - Strategy. */

function BriefBuilderStrategy({ formData, handleChange, handleToneChange, errors }) {

    return (

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
                    
                    <input type="checkbox" id="brief-builder-bold" name="bold" value="Bold" checked={formData.toneVoice.includes("Bold")} onChange={handleToneChange} />
                    <label htmlFor="brief-builder-bold">Bold</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-minimal" name="minimal" value="Minimal" checked={formData.toneVoice.includes("Minimal")} onChange={handleToneChange} />
                    <label htmlFor="brief-builder-minimal">Minimal</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-playful" name="playful" value="Playful" checked={formData.toneVoice.includes("Playful")} onChange={handleToneChange} />
                    <label htmlFor="brief-builder-playful">Playful</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-elevated" name="elevated" value="Elevated" checked={formData.toneVoice.includes("Elevated")} onChange={handleToneChange} />
                    <label htmlFor="brief-builder-elevated">Elevated</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-urgent" name="urgent" value="Urgent" checked={formData.toneVoice.includes("Urgent")} onChange={handleToneChange} />
                    <label htmlFor="brief-builder-urgent">Urgent</label>

                </div>

                <div className="brief-builder-checkbox-item">

                    <input type="checkbox" id="brief-builder-conversational" name="conversational" value="Conversational" checked={formData.toneVoice.includes("Conversational")} onChange={handleToneChange} />
                    <label htmlFor="brief-builder-conversational">Conversational</label>

                </div>

            </fieldset>

            <span className="brief-builder-error-message">{errors.toneVoice}</span>

        </div>

    )

}

export default BriefBuilderStrategy