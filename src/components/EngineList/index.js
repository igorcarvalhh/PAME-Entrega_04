import EngineCard from "../EngineCard"
import "./index.css"

export default function() {
    const engines = [
        {id:1,status:"Em operação",temp:"65,5"},
        {id:2,status:"Em operação",temp:"75,0"},
        {id:3,status:"Em operação",temp:"60,6"},
        {id:4,status:"Em operação",temp:"75,0"},
        {id:5,status:"Em operação",temp:"60,6"}
    ]
    const listEngine = engines.map((engine) => 
        <EngineCard id={engine.id} status={engine.status} temp={engine.temp}/>
    )
    return(
        <div className="engineList-container">
            {listEngine}
        </div>
    )
}