import "./index.css"
import { Link } from "react-router-dom";

export default function(props) {
    return(
        <Link to="/engine">  
            <div className="engineCard-container" variant="outlined">
                <h1>Motor {props.id}</h1>
                <div className="engine-information">
                    <p><strong>Status:</strong> {props.status}</p>
                    <p><strong>Temperatura atual:</strong>  {props.temp}°C</p> 
                </div>
                
            </div>
        </Link>
    )
}