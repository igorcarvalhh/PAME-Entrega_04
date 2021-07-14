import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function Graphic() {
    const data = [
        {name: '07/07', temp: 72.6},
        {name: '08/07', temp: 67.2},
        {name: '09/07', temp: 78.5},
        {name: '10/07', temp: 65.9},
        {name: '11/07', temp: 70.6},
        {name: '12/07', temp: 80},
        {name: '13/07', temp: 65.5}]
    return (
    <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={['auto', 'auto']}/>
        <Tooltip />
    </LineChart>
    );  
    
}