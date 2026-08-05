import { useState } from "react"
import "./ContactForm.css"

function ContactForm() {

    const [formData, setFormData] = useState({

        preferredContact: "",
        fullName: "",
        email: "",
        phone: "",
        message: "",
        agreeToTerms: false

    })


    function handleChange(event) {

            const { name, value, type, checked } = event.target

            setFormData({

                ...formData,
                [name]: type === "checkbox" ? checked : value

            })

        }

    function handleSubmit(event) {

            event.preventDefault()

            // Placeholder until the real POST /api/contacts route exists
            console.log("Contact form submitted:", formData)

        }

    return (

        <div className="contact-form-card">

            <form onSubmit={handleSubmit}>

                <div className="form-field">

                    <label htmlFor="preferredContact">Preferred Contact Method</label>

                    <div className="input-with-icon">

                        <i className="fa-solid fa-thumbs-up"></i>

                        <select

                            id="preferredContact"
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleChange}

                        >

                            <option value="">Select preferred contact</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>

                        </select>

                    </div>

                </div>

                <div className="form-field">

                    <label htmlFor="fullName">Full Name</label>

                    <div className="input-with-icon">

                        <i className="fa-solid fa-circle-user"></i>

                        <input

                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter name"
                            value={formData.fullName}
                            onChange={handleChange}

                        />

                    </div>

                </div>

                <div className="form-field">

                    <label htmlFor="email">Email</label>

                    <div className="input-with-icon">

                        <i className="fa-solid fa-envelope"></i>

                        <input

                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}

                        />

                    </div>

                </div>

                <div className="form-field">

                    <label htmlFor="phone">Phone Number</label>

                    <div className="input-with-icon">

                        <i className="fa-solid fa-square-phone"></i>

                        <input

                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handleChange}

                        />

                    </div>

                </div>

                <div className="form-field">

                    <label htmlFor="message">Message</label>

                    <div className="input-with-icon">

                        <i className="fa-solid fa-message"></i>

                        <textarea

                            id="message"
                            name="message"
                            placeholder="Add your message"
                            value={formData.message}
                            onChange={handleChange}

                        ></textarea>

                    </div>

                </div>

                <div className="form-checkbox">

                    <input

                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}

                    />

                    <label htmlFor="agreeToTerms">Minima quis ullamco laboris ut consectetur</label>

                </div>

                <button type="submit" className="form-submit">Send Message</button>

            </form>

        </div>

    )

}

export default ContactForm
