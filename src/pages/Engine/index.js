import Graphic from "../../components/Graphic"
import "./index.css"
import Header from "../../components/Header"

export default function Engine(){
    return(
        <div className="container">
            <Header/>
            <div className="engine-container">
                <div>
                    <h1>Motor 1</h1>
                    <h3>Temperatura atual:</h3>
                    <h2>65,5°C</h2>
                    <h3>Rotações por minuto:</h3>
                    <h2>60rpm</h2>
                    <h3>Status:</h3>
                    <h2>Em operação</h2>
                </div>
                <div className="grafico">
                    <Graphic/>
                </div>
            </div>
        </div>    
    )
}