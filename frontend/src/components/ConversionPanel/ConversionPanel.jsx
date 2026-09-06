import { useState } from "react"
import "./ConversionPanel.css"

/* ConversionPanel.jsx sits next to the generated brief output on the landing page.
It collects name/email/password and hands off to the parent CampaignBriefBuilder
via onConvert, which handles registration + brief creation + redirect. */

function ConversionPanel({ onConvert }) {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: ""

    })

    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleChange(event) {

        const { name, value } = event.target

        setFormData(function(prevData) {

            return { ...prevData, [name]: value }

        })

    }

    async function handleSubmit(event) {

        event.preventDefault()
        setError("")
        setIsSubmitting(true)

        try {

            await onConvert(formData)

        } catch (error) {

            setError(error.message || "Something went wrong. Please try again.")

        } finally {

            setIsSubmitting(false)

        }

    }

    return (

        <div className="conversion-panel-card">

            <span className="conversion-panel-badge">Get Your PDF</span>

            <h3 className="conversion-panel-heading">Email Me This brief</h3>

            <p className="conversion-panel-subtitle">Create your free account to get the PDF and unlock dashboards, team tools, and more.</p>

            <form onSubmit={handleSubmit}>

                <div className="conversion-panel-field">

                    <input

                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={handleChange}

                    />

                </div>

                <div className="conversion-panel-field">

                    <input

                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}

                    />

                </div>

                <div className="conversion-panel-field">

                    <input

                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}

                    />

                </div>

                {error && <p className="conversion-panel-error">{error}</p>}

                <button type="submit" className="conversion-panel-submit" disabled={isSubmitting}>

                    {isSubmitting ? "Sending..." : "Email Me The PDF"}

                </button>

            </form>

        </div>

    )

}

export default ConversionPanel