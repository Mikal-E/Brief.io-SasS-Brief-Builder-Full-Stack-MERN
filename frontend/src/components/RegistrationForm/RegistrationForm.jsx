import { useState } from "react"
import logoPlaceholder from "../../assets/brief.io-logo-placeholder.png"
import "./RegistrationForm.css"

/* The RegistrationForm.jsx component will share many of the same conventions as the ContactForm.jsx, and of course LoginForm.jsx. */

function RegistrationForm() {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
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

        // Placeholder until the real POST /api/auth/register route exists
        console.log("Registration form submitted:", formData)

    }

    return (

        <div className="registration-form-card">

            <img src={logoPlaceholder} alt="Brief.io logo" className="logo-placeholder" />

            <div className="registration-icon">

                <i className="fa-solid fa-id-card"></i>

            </div>

            <h1 className="registration-heading">Get started for free</h1>

            <form onSubmit={handleSubmit}>

                <div className="registration-form-field">

                    <label htmlFor="name">Name</label>

                    <div className="registration-input-with-icon">

                        <i className="fa-solid fa-circle-user"></i>

                        <input

                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleChange}

                        />

                    </div>

                </div>

                <div className="registration-form-field">

                    <label htmlFor="email">Email</label>

                    <div className="registration-input-with-icon">

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

                <div className="registration-form-field">

                    <label htmlFor="password">Password</label>

                    <div className="registration-input-with-icon">

                        <i className="fa-solid fa-lock"></i>

                        <input

                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create password"
                            value={formData.password}
                            onChange={handleChange}

                        />

                    </div>

                </div>

                <div className="registration-form-checkbox">

                    <input

                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}

                    />

                    <label htmlFor="agreeToTerms">Minima quis ullamco laboris ut consectetur</label>

                </div>

                <button type="submit" className="registration-form-submit">Sign Up</button>

            </form>

            <button type="button" className="registration-login-link">

                Login <i className="fa-solid fa-arrow-right-to-bracket"></i>

            </button>

        </div>

    )

}

export default RegistrationForm
