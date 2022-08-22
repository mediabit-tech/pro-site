import React from 'react';
import errorImg from '../../internalImgs/error404.png';
import './error404.css';
import { useNavigate } from "react-router-dom";

const Error404 = () => {

    let navigate = useNavigate();

    return (
        <>
            <div className="container custom-error-404">
                <div className="row">
                    <div className="col-12 lg-col-10">
                        <div className="row">
                            <img src={errorImg} alt="" loading='lazy' />
                        </div>
                    </div>

                    <div className='col-12 lg-col-10'>
                        <div className="row text-center">
                            <h3>OOP's! We can't seems to find the page you're looking for.</h3>
                            <button type="submit" value="Back To Home" className='btn btn-style' onClick={() => navigate("/")} >Back To Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404;