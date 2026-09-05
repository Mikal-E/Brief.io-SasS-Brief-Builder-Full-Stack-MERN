/* This HTML template function is for the Puppeteer PDF generation from a created brief. It is a plain JS function
that takes a brief object and returns an HTML string. It runs server-side and Puppeteer just needs raw HTML to render. */

const escapeHtml = (value) => {

    if (value === undefined || value === null) return "";

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

};

const buildBriefHtml = (brief) => {

    return `

        <!DOCTYPE html>
        <html>
        
            <head>

                <meta charset="UTF-8" />

                <style>

                    body {

                        font-family: 'Roboto', sans-serif;
                        color: #2a2a2a;
                        padding: 40px;
                        margin: 0;

                    }

                    .brief-output-section-title {

                        font-size: 18px;
                        font-weight: 700;
                        color: #b52026;
                        margin-top: 24px;
                        margin-bottom: 12px;
                        padding-bottom: 6px;
                        border-bottom: 1px solid #d0d0d0;

                    }

                    .brief-field-label {

                        font-size: 12px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.06em;
                        color: #6b6b6b;
                        margin-bottom: 2px;
                        margin-top: 12px;

                    }

                    .brief-field-value {

                        font-size: 15px;
                        color: #2a2a2a;
                        margin-bottom: 4px;

                    }

                    .brief-date {

                        font-size: 12px;
                        color: #6b6b6b;
                        margin-top: 32px;

                    }

                </style>

            </head>

            <body>

                <div class="brief-output-section">

                    <h3 class="brief-output-section-title">Project Info</h3>
                    <p class="brief-field-label">Project Name</p>
                    <p class="brief-field-value">${escapeHtml(brief.projectName)}</p>
                    <p class="brief-field-label">Project Type</p>
                    <p class="brief-field-value">${escapeHtml(brief.projectType)}</p>
                    <p class="brief-field-label">Timeline</p>
                    <p class="brief-field-value">${escapeHtml(brief.timeline)}</p>
                    <p class="brief-field-label">Key Stakeholders and/or Point of Contact</p>
                    <p class="brief-field-value">${escapeHtml(brief.stakeholderName)}</p>
                    <p class="brief-field-label">Contact Information</p>
                    <p class="brief-field-value">${escapeHtml(brief.stakeholderContact)}</p>

                </div>

                <div class="brief-output-section">

                    <h3 class="brief-output-section-title">Audience</h3>
                    <p class="brief-field-label">Target Audience</p>
                    <p class="brief-field-value">${escapeHtml(brief.targetAudience)}</p>
                    <p class="brief-field-label">Geographic Focus</p>
                    <p class="brief-field-value">${escapeHtml(brief.geographicFocus)}</p>
                    <p class="brief-field-label">Pain Points</p>
                    <p class="brief-field-value">${escapeHtml((brief.painPoints || []).join(", "))}</p>

                </div>

                <div class="brief-output-section">

                    <h3 class="brief-output-section-title">Strategy</h3>
                    <p class="brief-field-label">Objectives</p>
                    <p class="brief-field-value">${escapeHtml(brief.objectives)}</p>
                    <p class="brief-field-label">Goals</p>
                    <p class="brief-field-value">${escapeHtml(brief.goals)}</p>
                    <p class="brief-field-label">Tone & Voice</p>
                    <p class="brief-field-value">${escapeHtml((brief.toneVoice || []).join(", "))}</p>

                </div>

                <div class="brief-output-section">

                    <h3 class="brief-output-section-title">Scope</h3>
                    <p class="brief-field-label">Key Deliverables</p>
                    <p class="brief-field-value">${escapeHtml((brief.keyDeliverables || []).join(", "))}</p>
                    <p class="brief-field-label">Milestones</p>
                    <p class="brief-field-value">${escapeHtml(brief.milestones)}</p>
                    <p class="brief-field-label">Additional Information</p>
                    <p class="brief-field-value">${escapeHtml(brief.additionalInformation) || "None"}</p>
                    
                </div>

                <p class="brief-date">Generated: ${new Date().toLocaleDateString()}</p>

            </body>

        </html>

    `;
};

export default buildBriefHtml;