import React from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";

const Topbar = () => {

    const navigate = useNavigate();
    function clickOnAdminPanel(e) {
        e.preventDefault();
        navigate('/admin-signin');
    }

    return (
        <>
            <section className='topbar-bg'>
                <nav className="navbar">
                    <div className="container">

                        <a className="custom-social-icon" href="https://www.instagram.com/mediabit_admin/" target='_blank'>
                            <i class="fa-brands fa-instagram"></i> Instagram
                        </a>
                        <a className="custom-social-icon" href="https://www.linkedin.com/company/mediabit-technology/" target='_blank'>
                            <i class="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                        <a className="custom-social-icon" href="https://twitter.com/mediaBit3" target='_blank'>
                            <i class="fa-brands fa-twitter"></i> Twitter
                        </a>

                        <div>
                            <ul className="navbar-nav">
                                <a aria-current="page" href="/admin-signin" onClick={clickOnAdminPanel}><i class="fa-solid fa-gears"></i> Admin Panel </a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Topbar