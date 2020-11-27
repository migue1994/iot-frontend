import React, {useEffect, useState} from "react";
import "./Login.css";
import {useHistory} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Login(){

    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user'))){
            history.push('/app-content')
        }
    },[history])

    function handleChange(event){
        setUser({...user, [event.target.name] : event.target.value});
    }

    function submit(){
        const memory = JSON.parse(localStorage.getItem('memory'));
        if (memory.username === user.username && memory.password === user.password){
            alert(`Welcome ${user.username}`);
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/');
        }else {
            alert('Bad credentials, try again')
        }
    }

    return (
        <div className="login-container">
            <div className="card">
                <div className="avatar">
                    {/*avatar image*/}
                </div>
                <h1>Login</h1>
                <form onSubmit={submit}>
                    <TextField
                        label={'username'}
                        placeholder={'Set your username'}
                        name={'username'}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label={'password'}
                        placeholder={'Set your password'}
                        name={'password'}
                        type="password"
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button type={"submit"} fullWidth variant="contained" color={"primary"} className="button">
                        LOGIN
                    </Button>
                    <br/><br/>
                    <a style={{padding:'20px'}} href={"/signUp"}>Don't have an account?</a>
                </form>
            </div>
        </div>
    )
}