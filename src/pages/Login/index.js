import "./index.css"
import {withRouter, Link} from "react-router-dom";
import React, { useState } from 'react';


function Login({history}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validEmail = "fluxo@ufrj.br";
    const validPassword = "12345678";

    function handleSignIn() {
        
        if (email == validEmail && password == validPassword) {
            history.push("/menu");
        } else {
            alert("Login ou senha inválidos!")
        }
    }

    return(
        <form onSubmit={handleSignIn}>
        <div className="login-container">
            <h1>Login</h1>
                <input 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Senha" 
                    type="password"
                    onChange={(p) => setPassword(p.target.value)}
                />
                
                <button type="submit" className="login-button" variant="outlined">
                    Login
                </button>
                
                <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
                <Link to="/signup">
                    <button className="signUp-buttom">Sign up</button>
                </Link>
        </div>
        </form>
    )
}

export default withRouter(Login)