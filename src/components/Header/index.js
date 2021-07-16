import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Engine Manager</h1>
            </div>
            
            <div className="nav-options">
                <NavLink to="/menu" activeClassName="selected">
                    <h3 className="selected">Motores</h3>
                </NavLink>
                <NavLink to="/pesos" activeClassName="selected">
                   <h3>Pesos</h3> 
                </NavLink>
                
                <NavLink to="/funcionarios" activeClassName="selected">
                    <h3>Funcionários</h3>
                </NavLink>
                <NavLink to="/perfil" activeClassName="selected">
                    
                </NavLink>
                
            </div>
        </header>
    )
}