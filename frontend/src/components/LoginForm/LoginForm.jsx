import { useState } from "react"
import "./LoginForm.css"
import logoPlaceholder from "../../assets/brief.io-logo-placeholder.png"

/* The LoginForm.jsx component will share many of the same conventions as the ContactForm.jsx, and of course SigninForm.jsx when it exist. */

function LoginForm() {

    const [formData, setFormData] = useState({

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

        // Placeholder until the real POST /api/auth/login route exists
        console.log("Login form submitted:", formData)

    }

    return (

        <div className="login-form-card">

            <img src={logoPlaceholder} alt="Brief.io logo" className="logo-placeholder" />

            <div className="login-icon">

                <i className="fa-solid fa-circle-user"></i>

            </div>

            <h1 className="login-heading">Welcome back!</h1>

            <form onSubmit={handleSubmit}>

                <div className="login-form-field">

                    <label htmlFor="email">Email</label>

                    <div className="login-input-with-icon">

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

                <div className="login-form-field">

                    <label htmlFor="password">Password</label>

                    <div className="login-input-with-icon">

                        <i className="fa-solid fa-lock"></i>

                        <input

                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}

                        />

                    </div>

                </div>

                <div className="login-form-checkbox">

                    <input

                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}

                    />

                    <label htmlFor="agreeToTerms">Minima quis ullamco laboris ut consectetur</label>

                </div>

                <button type="submit" className="login-form-submit">Log In</button>

            </form>

            <button type="button" className="login-create-account-link">

                <i className="fa-solid fa-id-card"></i> Create Account

            </button>

        </div>

    )

}

export default LoginForm
