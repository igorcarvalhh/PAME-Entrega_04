import "./index.css"

export default function FuncionarioList() {
    const funcionarios = [
        {id:1,name:"Nicolle Tavares Rohor Bastos"},
        {id:2,name:"Rechel Christo de Almeida"},
        {id:3,name:"Eduardo da Silva Batista"},
        {id:4,name:"Rafael Augusto Iorio Pires"},
        {id:5,name:"Thiago Motta de Abreu"},
        {id:6,name:"Henrique Marques Lozano"},
        {id:7,name:"Flávia Regina Gonçalves do Nascimento"}
    ]
    const listFuncionarios = funcionarios.map((funcionario) => 
        <tr>
            <td>{funcionario.id}</td>
            <td>{funcionario.name}</td>
        </tr>
    )
    return(
        <table className="tabela-funcionarios">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
                {listFuncionarios}
        </table>
    )
}