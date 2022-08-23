import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './signin.css';

const Signin = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signInUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/v1/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const data = res.json();
        if (data.status === 400 || !data) {
            console.log("Oops, Something gets wrong!");
        } else {
            console.log("Successfully signin!, Redirecting...");
            navigate('/upload-post');
        }
    };

    return (
        <>
            <div className="box-form">
                <div className="left">
                    <div className="overlay">
                        <h1>{"</admin>"}</h1>
                        <h4>Available for admin access only. Connect with admin on <b>mediabittechnologies@gmail.com</b> for any support.</h4>
                    </div>
                </div>

                <div className="right">
                    <h5>Sign In</h5>
                    <p>Don't have an account? <a href="">Creat Your Account</a> Feature is disabled by admin.</p>
                    <form method='POST'>
                        <div className="inputs">
                            <input className='input-field' type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                            <br />
                            <input className='input-field' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </form>

                    <br />
                    <button className="btn btn-style" onClick={signInUser} >Sign In</button>
                </div>

            </div>
        </>
    )
}

export default Signin