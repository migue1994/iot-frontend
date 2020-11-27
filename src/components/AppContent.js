import React, {useEffect} from 'react';
import './AppContent.css';
import {useHistory} from 'react-router-dom';
import Button from "@material-ui/core/Button";

export default function AppContent() {

    const history = useHistory();

    useEffect(() => {
        if  (!localStorage.getItem('user')){
            history.push('/signIn')
        }
    })

    function handleLogout(){
        localStorage.removeItem('user')
        window.location.reload();
    }

    return (
        <div className="content-main">
            <h1 style={
                {
                    marginBottom: '40px',
                    marginTop: 0,
                    color: '#3c47a7'
                }
            }
            >Check the status of your pet</h1>
            <div className='menu'>
                <h1 style={{margin: '10px'}}>Menu</h1>
                <div className='buttons'>
                    <label>
                        <Button
                            color={"primary"}
                            variant={"contained"}
                            fullWidth
                            style={{
                                background: '#d41919'
                            }}
                            onClick={() => history.push('/temperature')}
                        >
                            Check temperature
                        </Button>
                    </label>
                    <label>
                        <Button
                            color={"primary"}
                            variant={"contained"}
                            fullWidth
                            style={{
                                background: '#3d5ebc'
                            }}
                            onClick={() => history.push('air')}
                        >
                            Check air quality
                        </Button>
                    </label>
                    <label>
                        <Button
                            color={"primary"}
                            variant={"contained"}
                            fullWidth
                            style={{
                                background: '#cb7132'
                            }}
                            onClick={() => history.push('/noise')}
                        >
                            Check noise
                        </Button>
                    </label>
                    <label>
                        <Button
                            color={"primary"}
                            variant={"contained"}
                            fullWidth
                            style={{
                                background: '#68d21c'
                            }}
                            onClick={() => history.push('proximity')}
                        >
                            Check food proximity
                        </Button>
                    </label>
                    <label>
                        <Button
                            color={"primary"}
                            variant={"contained"}
                            fullWidth
                            style={{
                                background: '#020202'
                            }}
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </label>
                </div>
            </div>
        </div>
    )
}