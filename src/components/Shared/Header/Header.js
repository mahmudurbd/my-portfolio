import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <div className="container">
                <a className="navbar-brand logo" href="/">Mahmudur</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Me</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/home#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home#contact">Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;