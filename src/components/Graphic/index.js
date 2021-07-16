import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function Graphic() {
    const data = [
        {name: '8', temp: 72.6},
        {name: '9', temp: 67.2},
        {name: '10', temp: 78.5},
        {name: '11', temp: 65.9},
        {name: '12', temp: 50.5},
        {name: '13', temp: 68.2},
        {name: '14', temp: 51.8},
        {name: '15', temp: 64.4},
        {name: '16', temp: 70.2},
        {name: '17', temp: 49.2},
        {name: '18', temp: 65.5}]
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