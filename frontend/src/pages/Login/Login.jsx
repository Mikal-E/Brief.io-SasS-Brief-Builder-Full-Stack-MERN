import LoginForm from "../../components/LoginForm/LoginForm"
import "../../components/LoginForm/LoginForm.css"
import "./Login.css"

function Login() {

    return (

        <div className="login-page">

            <div className="login-form-side">

                <LoginForm />

            </div>

            <div className="login-image-side">

                {/* Placeholder image for now */}

            </div>

        </div>

    )

}

export default Login