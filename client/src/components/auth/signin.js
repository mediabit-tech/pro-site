import React from 'react';
import './signin.css';

const signin = () => {
    return (
        <>
            <div class="box-form">
                <div class="left">
                    <div class="overlay">
                        <h1>{"</admin>"}</h1>
                        <h4>Available for admin access only. Connect with admin on <b>mediabittechnologies@gmail.com</b> for any support.</h4>
                    </div>
                </div>

                <div class="right">
                    <h5>Sign In</h5>
                    <p>Don't have an account? <a href="">Creat Your Account</a> Feature is disabled by admin.</p>
                    <div class="inputs">
                        <input type="text" placeholder="Email address" />
                        <br />
                        <input type="password" placeholder="Password" />
                    </div>

                    <br /><br />

                    <div class="remember-me--forget-password">

                    </div>

                    <br />
                    <button className="btn btn-style" >Sign In</button>
                </div>

            </div>
        </>
    )
}

export default signin