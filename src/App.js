import React, {useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/login";
import AppContent from "./components/appContent";

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
                    <Route exact path="/" component={Login}/>
                    <Route path="/app-content" component={AppContent}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
