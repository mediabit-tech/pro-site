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
                            © {year} | All Rights Reserved | brownpaper powered by <a href="https://mediabit.in/" target='_blank' className='footer-css'>mediabit.in</a> | Made with <span style={{ color: "#3C1C0A" }}>❤</span> in India
                        </p>
                        <div className='bottom-narrow-strip'></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer