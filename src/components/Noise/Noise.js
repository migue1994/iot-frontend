import React, {useEffect, useState} from "react";
import {Chart} from "grommet";

export default function Noise(){

    const axios = require('axios');
    const [temperatures, setTemperatures] = useState([]);
    const [chart, setChart] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        axios.get('https://iot-endpoint.herokuapp.com/api/iot/data/noises')
            .then(response => response.data)
            .then(data => setTemperatures(data))
    })

    useEffect(() => {
        axios.get('https://iot-endpoint.herokuapp.com/api/iot/data/noiseChart')
            .then(response => response.data)
            .then(data => setChart(data))

        setTimeout(() => {
            setFlag(!flag)
        },30000);
    }, [flag])

    return(
        <div className='main-temperature'>
            <h1>Noise measure</h1>
            <br/><br/><br/>
            <Chart
                animate
                values={chart}
                type={"line"}
            />
            <table style={{width: '50%'}}>
                <tr>
                    <th>Date</th>
                    <th>Noise level</th>
                </tr>
                {temperatures.map(temperature => (
                    <tr>
                        <td>{temperature.updated}</td>
                        <td>{temperature.analog}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}