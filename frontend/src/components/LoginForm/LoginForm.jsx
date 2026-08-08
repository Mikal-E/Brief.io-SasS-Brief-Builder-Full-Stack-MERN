import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginForm.css"
import logoPlaceholder from "../../assets/brief.io-logo-placeholder.png"

/* The LoginForm.jsx component will share many of the same conventions as the ContactForm.jsx, and of course SigninForm.jsx when it exist. */

function LoginForm() {

    const navigate = useNavigate();

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
    
    async function handleSubmit(event) {

        event.preventDefault()

        try {

            const response = await fetch("http://localhost:3001/api/auth/login", {

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })

            })

            const data = await response.json()

            if (!response.ok) {

                throw new Error(data.message || "Login failed")
                
            }

            localStorage.setItem("token", data.token)
            console.log("Logged in successfully:", data.user)
            navigate("/dashboard")

        } catch (error) {

            console.error("Login error:", error.message)

        }
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

            <Link to="/register" className="login-create-account-link">

                <i className="fa-solid fa-id-card"></i> Create Account
                
            </Link>

        </div>

    )

}

export default LoginForm
