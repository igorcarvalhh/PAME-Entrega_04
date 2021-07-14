import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Engine Manager</h1>
            </div>
            
            <div className="nav-options">
                <Link to="/menu">
                    <h3 className="selected">Motores</h3>
                </Link>
                
                <h3>Perfil</h3>
            </div>
        </header>
    )
}