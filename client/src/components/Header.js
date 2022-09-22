import React from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    function contactSection(e) {
        e.preventDefault();
        navigate('/suggestion-box');
    }

    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1>Elevate yourself from <span>Zero to Hero</span> level real-life problems</h1>
                            <p className='main-hero-paragraph'>We are trying to do a collection of zero to hero-level problems related to the fullstack with DSA. <br /> Please send the message from the suggestion box if you have any suggestions. <a onClick={contactSection} style={{ color: '#3C1C0A', cursor: 'pointer' }} > Click here</a></p>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;