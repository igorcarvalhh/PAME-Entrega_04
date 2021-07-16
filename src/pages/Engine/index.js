import Graphic from "../../components/Graphic"
import "./index.css"
import Header from "../../components/Header"
import FuncionarioList from "../../components/FuncionarioList"

export default function Engine(){
    return(
        <div className="container">
            <Header/>
            <div className="engine-container">
                <div>
                    <h1>Motor 1</h1>
                    <h3>Temperatura atual:</h3>
                    <h2>65,5°C</h2>
                    <h3>Status:</h3>
                    <h2>Em operação</h2>
                    <h3>Tipo:</h3>
                    <h2>Motor de Esteira</h2>
                    <h3>Modelo:</h3>
                    <h2>Deluxe Premium</h2>
                </div>
                <div className="grafico">
                    <h2>Registro de Temperaturas</h2>
                    <Graphic/>
                </div>
                <div className="funcionarios-permitidos">
                    <h2>Funcionários com permissão</h2>
                   <FuncionarioList/> 
                   <button>Permitir Funcionário</button>
                </div>
                
            </div>
        </div>    
    )
}