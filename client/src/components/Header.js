import React from 'react'
import "../App.css"
import "../arrow.scss"
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();
    
    function routeChange () {
        navigate("/");
    };

    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">We <span className='heart-emoji'>❤</span> Your Creative <br /> & Innovative Ideas</h1>
                            <p className='main-hero-paragraph'>We are a creative & innovative IT consulting services and support company, offering our excellence in web & mobile app design and development with automation. If your business craves for any IT solution, you just name it, we have the solution.</p>
                            <div className='justify-content-center'>
                                <button className='btn-style btn-style-m' onClick={routeChange}>Read more</button>
                                <button className='btn-style btn-style-m btn-style-b'>Comming soon</button>
                            </div>
                        </div>
                        {/* main header right side */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src="./images/sample-prev.png" alt="heroimg" className='img-fluid' loading='lazy' />
                        </div>
                    </div>
                    {/* Arrow styling */}
                    <div className="row">
                        <div className="arrow arrow-first"></div>
                        <div className="arrow arrow-second"></div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header