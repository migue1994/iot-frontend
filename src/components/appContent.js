import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import './appContent.css';
import Button from "@material-ui/core/Button";

export default function AppContent(){

    const history = useHistory();
    const axios = require('axios');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('user')){
            history.push('/')
        }
    },[history])

    useEffect(() => {
        axios.get('https://iot-endpoint.herokuapp.com/api/iot/data')
            .then(response => response.data)
            .then(data => setData(data));
    })

    function handleButton(){
        localStorage.removeItem('user')
        history.push('/')
    }

    return(
        <div className="aṕp-content">
            {console.log(data)}
            <table className="table">
                <tr>
                    <th>Temperature</th>
                    <th>Air quality</th>
                    <th>Water level</th>
                    <th>Weight</th>
                    <th>Near the meal</th>
                    <th>Noise</th>
                </tr>
                <tbody>
                {data.map((d, index) => (
                    <tr key={index}>
                        <td>{d.temperature}</td>
                        <td>{d.airQuality}</td>
                        <td>{d.waterLevel}</td>
                        <td>{d.weight}</td>
                        <td>{d.isNearTheMeal ? 'Yes': 'No'}</td>
                        <td>{d.noise}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Button
                onClick={handleButton}
                className="button"
                variant={"contained"}
                color={"secondary"}
            >
                Logout
            </Button>
        </div>
    )
}