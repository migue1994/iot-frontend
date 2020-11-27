import React, {useEffect, useState} from "react";
import {Chart} from "grommet";

export default function Proximity(){

    const axios = require('axios');
    const [temperatures, setTemperatures] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        axios.get('https://iot-endpoint.herokuapp.com/api/iot/data/isNearTheMeal')
            .then(response => response.data)
            .then(data => setTemperatures(data))
    })

    return(
        <div className='main-temperature'>
            <h1>My pet is near the meal?</h1>
            <br/><br/><br/>
            <table style={{width: '50%'}}>
                <tr>
                    <th>Date</th>
                    <th>Is near?</th>
                </tr>
                {temperatures.map(temperature => (
                    <tr>
                        <td>{temperature.updated}</td>
                        <td>{temperature.close?'Yes':'No'}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}