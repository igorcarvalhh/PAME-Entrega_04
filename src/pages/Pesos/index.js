import Header from "../../components/Header"
import "./index.css"

export default function Pesos() {

    const bolsas = [
        {bolsa_id:"000002140721",peso:20.9},
        {bolsa_id:"000002140722",peso:21.0},
        {bolsa_id:"000002140723",peso:21.2},
        {bolsa_id:"000002140724",peso:21.3},
        {bolsa_id:"000002140724",peso:21.1},
        {bolsa_id:"000002140724",peso:21.5},
        {bolsa_id:"000002140724",peso:20.1},
        {bolsa_id:"000002140724",peso:21.4},
        {bolsa_id:"000002140724",peso:21.2},
        {bolsa_id:"000002140724",peso:21.4},
        {bolsa_id:"000002140724",peso:21.2},
        {bolsa_id:"000002140724",peso:20.4},
        {bolsa_id:"000002140724",peso:20.9},
        {bolsa_id:"000002140724",peso:20.9},
        {bolsa_id:"000002140724",peso:20.4},
        {bolsa_id:"000002140725",peso:20.8}
    ]
    const listBolsas = bolsas.map((bolsa) => 
        <tr>
            <td>{bolsa.bolsa_id}</td>
            <td>{bolsa.peso} kg</td>
        </tr>
    )
    return(
        <div className="funcionarios-container">
            <Header/>
            <table>
                    <tr>
                        <th>ID Saco</th>
                        <th>Peso</th>
                    </tr>
                    {listBolsas}
            </table>
         </div>   
    )
}