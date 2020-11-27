import React, {useState} from "react";
import './SignUp.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle, Subject, Visibility, VisibilityOff, VpnKey} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {useHistory} from 'react-router-dom';

export default function Signup(){

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState();
    const [flag, setFlag] = useState(false);
    const history = useHistory();

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function changeVisibility(){
        setFlag(!flag);
    }

    function signUp(){
        if (user.password !== password){
            alert('The passwords are not equals, please try again');
        }else {
            alert('Operation successfully');
            history.push('/signIn');
        }
    }

    return(
        <div className="sign-up-container">
            <div className="signUp-card">
                <h1>Sign up</h1>
                <form onSubmit={signUp}>
                    <TextField
                        label={"Name"}
                        placeholder={'Set your full name'}
                        fullWidth
                        name={'name'}
                        onClick={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Subject/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label={"User name"}
                        placeholder={'Set a user name'}
                        fullWidth
                        name={'username'}
                        onClick={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label={"Password"}
                        placeholder={'Set a password'}
                        fullWidth
                        name={'password'}
                        onClick={handleChange}
                        type={flag?'text':'password'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKey/>
                                </InputAdornment>
                            ),
                            endAdornment:(
                                <InputAdornment>
                                    <IconButton onClick={changeVisibility}>
                                        {flag?<Visibility/>:<VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        label={"Confirm Password"}
                        placeholder={'Confirm your password'}
                        fullWidth
                        name={'password'}
                        onClick={handlePassword}
                        type={flag?'text':'password'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKey/>
                                </InputAdornment>
                            ),
                            endAdornment:(
                                <InputAdornment>
                                    <IconButton onClick={changeVisibility}>
                                        {flag?<Visibility/>:<VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button variant={"contained"} color={"primary"} type={"submit"}>
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    )
}