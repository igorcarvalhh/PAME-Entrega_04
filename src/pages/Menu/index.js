import Header from "../../components/Header"
import "./index.css"
import EngineList from "../../components/EngineList"

export default function Menu() {
    return(
       <div className="home-container">
           <Header/>
           <EngineList/>
       </div>
    )
}