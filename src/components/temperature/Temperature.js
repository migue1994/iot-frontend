import React, {useEffect, useState} from "react";
import './Temperature.css';
import {Chart} from "grommet";

export default function Temperature(){

    const axios = require('axios');
    const [temperatures, setTemperatures] = useState([]);
    const [chart, setChart] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        axios.get('https://iot-endpoint.herokuapp.com/api/iot/data/temperatures')
            .then(response => response.data)
            .then(data => setTemperatures(data))
    },[])

    useEffect(() => {
        axios.get('https://iot-endpoint.herokuapp.com/api/iot/data/temperatureChart')
            .then(response => response.data)
            .then(data => setChart(data))

        setTimeout(() => {
            setFlag(!flag)
        },30000);
    }, [flag])

    return(
        <div className='main-temperature'>
            <h1>Temperature measure</h1>
            <br/><br/><br/>
            <Chart
                animate
                values={chart}
                type={"line"}
            />
            <table style={{width: '50%'}}>
                <tr>
                    <th>Date</th>
                    <th>Humidity</th>
                    <th>Temperature</th>
                </tr>
                {temperatures.map(temperature => (
                    <tr>
                        <td>{temperature.updated}</td>
                        <td>{temperature.humidity}</td>
                        <td>{temperature.temperature}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}