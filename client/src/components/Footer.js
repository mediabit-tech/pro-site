import React from 'react';
import "../App.css";

const Footer = () => {

    var currentTime = new Date();
    var year = currentTime.getFullYear();

    return (
        <>
            <footer>
                <div className="footerWrap">
                    <div className="footer">
                        <hr />
                        <p className='main-hero-paragraph footerContent'>
                            Copyright © {year} <a href="#top" className='footer-css'>mediaBit.in</a> | All Rights Reserved | Made with <span style={{ color: "#9400d3" }}>❤</span> in India
                        </p>
                        <div className='bottom-narrow-strip'></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer