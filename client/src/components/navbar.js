import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css"
import headerLogo from '../internalImgs/mb-copyright-logo.png';

const Navbar = () => {

    const [navBtnShowHide, setNavBtnShowHide] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <section className='navbar-bg'>
                <nav className="navbar navbar-expand-lg sticky-navbar-custom">
                    <div className="container">
                        <a className="navbar-brand">
                            {/* mediaBit <span className='cutom-span-tag'>.in</span> */}
                            <img src={headerLogo} onClick={() => navigate('/')} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setNavBtnShowHide(!navBtnShowHide)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${navBtnShowHide ? "show" : ""}`} >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i> Homepage </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i class="fa-solid fa-book-open"></i> Practice Tutorial </a>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#"></a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar