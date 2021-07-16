import "./index.css"
import {withRouter, Link} from "react-router-dom";
import React, { useState } from 'react';


function SignUp({history}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const validEmail = "fluxo@ufrj.br";
    const validPassword = "12345678";

    function handleSignIn() {
        
        if (email == validEmail && password == validPassword) {
            history.push("/menu");
        } else {
            alert("Você não pode se cadastrar!")
        }
    }

    return(
        <form onSubmit={handleSignIn}>
        <div className="login-container">
            <h1>Sign Up</h1>
                <input 
                    placeholder="Nome completo"
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Senha" 
                    type="password"
                    onChange={(p) => setPassword(p.target.value)}
                />
                <input 
                    placeholder="Confirme sua senha" 
                    type="password"
                    
                />
                
                <button type="submit" className="login-button" variant="outlined">
                    Sign up
                </button>
                
                <p>Caso já seja registrado faça o Login abaixo</p>
                <Link to="/">
                    <button className="signUp-buttom">Login</button>
                </Link>
        </div>
        </form>
    )
}

export default withRouter(SignUp)