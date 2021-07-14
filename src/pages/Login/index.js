import "./index.css"
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div className="login-container">
            <h1>Login</h1>
            <input placeholder="Email"></input>
            <input placeholder="Senha" type="password"></input>
            <Link to="/menu">
            <button className="login-button" variant="outlined">
                Login
            </button>
            </Link>
            <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
            <button>Sign up</button>
        </div>
    )
}

