import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {

    const [navBtnShowHide, setNavBtnShowHide] = useState(false);
    const navigate = useNavigate();

    function clickOnHomepage(e) {
        e.preventDefault();
        navigate('/');
    };

    function goToSigninPage(e) {
        e.preventDefault();
        navigate('/admin-signin');
    };

    return (
        <>
            <section className='navbar-bg'>
                <nav className="navbar navbar-expand-lg sticky-navbar-custom">
                    <div className="container">
                        <a className="navbar-brand" onClick={clickOnHomepage}><span className='cutom-span-tag'><i class="fa-solid fa-book-open"></i> brownpaper</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setNavBtnShowHide(!navBtnShowHide)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${navBtnShowHide ? "show" : ""}`} >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a className="nav-link" onClick={clickOnHomepage} style={{fontWeight: 'bold'}}><i class="fa-solid fa-home"></i> Homepage</a>
                                </li>
                                {/* <button className='btn-style' onClick={goToSigninPage}>Sign In</button> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar