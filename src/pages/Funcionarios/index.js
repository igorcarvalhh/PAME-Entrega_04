import Header from "../../components/Header"
import "./index.css"
import React, { useState } from 'react';

export default function Funcionarios() {

    const funcionarios = [
        {name:"Milton Cisneiros Pescada",email:"milton@poli.ufrj.br",number:"21988150626",cargo:"Gerente"},
        {name:"Keyson Teles Rufino",email:"keyson@poli.ufrj.br",number:"21988150626",cargo:"Estagiário"},
        {name:"Adama Pimenta Mascarenha",email:"adama@poli.ufrj.br",number:"21988150626",cargo:"Assistente"},
        {name:"Iulian Quadros Alcântara",email:"iulian@poli.ufrj.br",number:"21988150626",cargo:"Analista"},
        {name:"Armando Taveira Bensaúde",email:"armando@poli.ufrj.br",number:"21988150626",cargo:"Gerente"},
        {name:"Hoorain Pureza Costa",email:"hoorain@poli.ufrj.br",number:"21988150626",cargo:"Supervisor"},
        {name:"Natanael Lagos Cangueiro",email:"natanael@poli.ufrj.br",number:"21988150626",cargo:"Gerente"},
        {name:"Viktoria Bragança Moreira",email:"viktoria@poli.ufrj.br",number:"21988150626",cargo:"Gerente"},
        {name:"Virgínia Tavares Sousa",email:"virginia@poli.ufrj.br",number:"21988150626",cargo:"Coordenador"},
        {name:"Doriana Duarte Gil",email:"doriana@poli.ufrj.br",number:"21988150626",cargo:"Consultor"},
        {name:"Gerson Rebocho Dâmaso",email:"gerson@poli.ufrj.br",number:"21988150626",cargo:"Gerente"},
        {name:"Anastasia Rebotim Junqueira",email:"anastasia@poli.ufrj.br",number:"21988150626",cargo:"Gerente"},
        {name:"Cloe Pinto Figueiroa",email:"cloe@poli.ufrj.br",number:"21988150626",cargo:"Estagiário"},
        {name:"Alan Mendonça Gravato",email:"alan@poli.ufrj.br",number:"21988150626",cargo:"Consultor"},
        {name:"Marcos Medina Estrada",email:"marcos@poli.ufrj.br",number:"21988150626",cargo:"Consultor"},
        {name:"Rania Areosa Barbosa",email:"rania@poli.ufrj.br",number:"21988150626",cargo:"Consultor"}
    ]
    

    const listFuncionarios = funcionarios.map((funcionario) => 
        <tr>
            <td>{funcionario.name}</td>
            <td>{funcionario.email}</td>
            <td>{funcionario.number}</td>
            <td>{funcionario.cargo}</td>
        </tr>
    )


    return(
        <div className="funcionarios-container">
            <Header/>
            <form >
                <button>Cadastrar funcionário</button>
                <input placeholder="Nome" ></input>
                <input placeholder="Email"></input>
                <input placeholder="Contato"></input>
                <input placeholder="Cargo" ></input>
            </form>
            
            <table>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Contato</th>
                        <th>Cargo</th>
                    </tr>
                    {listFuncionarios}
            </table>
         </div>   
    )
}