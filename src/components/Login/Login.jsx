// TODO login page

import Logo from "../Header/Logo"
import MenuLayer from "../Header/MenuLayer"
import LoginForm from "./LoginForm"
import '../Header/_header.scss'
import '../Header/_menuLayer.scss'
import './_login.scss'

function Login() {
    return (
        <div className="login">
            <div className="header top flex justify-between">
                <Logo />
                <MenuLayer />
            </div>
            <div className="section">
                <div className="content">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login