import React, {useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/Signin/Login";
import Signup from "./components/SignUp/Signup";
import AppContent from "./components/AppContent";
import Temperature from "./components/temperature/Temperature";
import Noise from "./components/Noise/Noise";
import AirQuality from "./components/airQuality/AirQuality";
import Proximity from "./components/proximity/Priximity";

export default function App(){

    useEffect(() => {
        const mock = {
            username: 'admin123',
            password: 'admin'
        }
        localStorage.setItem('memory', JSON.stringify(mock));
    }, [])

    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AppContent}/>
                    <Route exact path="/signIn" component={Login}/>
                    <Route exact path="/signUp" component={Signup}/>
                    <Route exact path="/temperature" component={Temperature}/>
                    <Route exact path="/noise" component={Noise}/>
                    <Route exact path="/air" component={AirQuality}/>
                    <Route exact path="/proximity" component={Proximity}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
