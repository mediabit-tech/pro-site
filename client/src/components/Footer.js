import React from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    function goToAdminPanel() {
        navigate('/admin-signin');
    }

    var currentTime = new Date();
    var year = currentTime.getFullYear();

    return (
        <>
            <footer>
                <div className="footerWrap">
                    <div className="footer">
                        <hr />
                        <p className='main-hero-paragraph footerContent'>
                            © {year} Brownpaper. All Rights Reserved.<a onClick={goToAdminPanel} style={{ cursor: "pointer" }}> <i class="fa-solid fa-gear"></i> Admin</a>
                        </p>
                        <div className='bottom-narrow-strip'></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer