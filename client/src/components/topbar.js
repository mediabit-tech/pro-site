import React from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";

const Topbar = () => {

    const navigate = useNavigate();
    function clickOnAdminPanel(e) {
        e.preventDefault();
        navigate('/admin-signin');
    }

    function clickOnLogoutPanel(e) {
        e.preventDefault();
        navigate('/logout');
    }

    return (
        <>
            <section className='topbar-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{ color: 'white' }}>Follow us on social platform</h6>
                        </div>
                        <div className="col-6">
                            <ul>
                                <a className="custom-social-icon" href="https://twitter.com/mediaBit3" target='_blank'><i class="fa-brands fa-twitter"></i></a>
                                <a className="custom-social-icon" href="https://www.instagram.com/mediabit_admin/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                                <a className="custom-social-icon" href="https://www.linkedin.com/company/mediabit-technology/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                            </ul>
                        </div>
                    </div>

                    {/* <div>
                            <ul className="navbar-nav">
                                <a aria-current="page" href="/admin-signin" onClick={clickOnAdminPanel}><i class="fa-solid fa-gear"></i> Admin </a>
                            </ul>
                        </div>
                        <div>
                            <ul className="navbar-nav">
                                <a aria-current="page" href="/logout" onClick={clickOnLogoutPanel}><i class="fa-solid fa-arrow-right-from-bracket"></i> </a>
                            </ul>
                        </div> */}
                </div>
            </section>
        </>
    )
}

export default Topbar