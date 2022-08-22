import React, { useState } from 'react'
import sample from "../internalImgs/8.png"
import whyChooseUs from "../API/WhyChooseUs"
import { useNavigate } from 'react-router-dom'

const AboutSection = () => {

    const [aboutData, setAboutData] = useState(whyChooseUs);
    const navigate = useNavigate();
    
    function routeChange () {
        navigate("/about");
    };

    return (
        <>
            <section className='common-section our-services'>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src={sample} alt="aboutSectionImg" />
                        </div>
                        {/* 1st section right side data */}
                        <div className="col-12 col-lg-7 our-services-list left-shift-custom">
                            <h3 className='mini-title'>
                                ANALYSIS | PLANNING | DESIGN & LAYOUT | BUILD | BETA | EVOLUTION
                            </h3>
                            <h1 className='main-heading'>Why Choose Us As Your IT Partner</h1>

                            {aboutData.map((elem) => {
                                const { id, title, info } = elem;
                                return <>
                                    <div className="row our-services-info">
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-service-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-paragraph">{info}</p>
                                        </div>
                                    </div>
                                </>;
                            })}

                            {/* <br />

                            <button className='btn-style btn-style-border' onClick={routeChange}>Read more</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection