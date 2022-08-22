import React, { useState } from 'react'
import "../App.css"
import HeadServiceSec from "../API/HeadServicesSec"

const HeaderServicesSection = () => {

    const [workData, setWorkData] = useState(HeadServiceSec);
    
    return (
        <>
            <section>
                <div className="servicesec-container container">
                    <h1 className='main-heading text-center'>Our Exemplary Services</h1>
                    <div className="row">
                        {workData.map((currentElement) => {
                            const { id, logo, title, info } = currentElement;
                            return <>
                                <div className="col-12 col-lg-4 text-center servicesec-container-subdiv">
                                    <i className={`fontawesome-style ${logo}`}></i>
                                    <h2 className='sub-heading'>{title}</h2>
                                    <p className="main-hero-paragraph w-100">{info}</p>
                                </div>
                            </>;
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderServicesSection