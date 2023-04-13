import React from 'react'
import logo from '../assets/img/ts-logo.png'
import img from '../assets/img/hero-img.png'
import { useState } from 'react';

export default function Header() {
    const [buttonClass, setButtonClass] = useState('bi text-dark mobile-nav-toggle bi-list');
    const [navClass, setNavClass] = useState('navbar text-dark');

    const handleClick = () => {
        if (buttonClass === 'bi text-dark mobile-nav-toggle bi-list') {
            setNavClass('navbar text-dark navbar-mobile');
            setButtonClass('  mobile-nav-toggle ');
        } else {
            setNavClass('navbar text-dark');
            setButtonClass(' mobile-nav-toggle ');
        }
    };

    // "bi bi-list mobile-nav-toggle text-dark"
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top bg-white">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                    </h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="#" className="logo me-auto"><img src={logo} alt="" className="img-fluid" /></a> */}
                    <nav id="navbar" className={navClass} onClick={handleClick}>
                        <ul>
                            <li>
                                <a className="nav-link scrollto active" href="#hero">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#erp">
                                    ERP
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#services">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a className="nav-link scrollto" href="#team">
                                    Team
                                </a>
                            </li>
                            {/* <li className="dropdown">
                                <a href="#">
                                    <span>Project</span> <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Project 1</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">
                                            <span>Project 2</span>{" "}
                                            <i className="bi bi-chevron-right" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Project 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
                            <li>
                                <a className="nav-link scrollto" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a className="getstarted scrollto" href="#about">
                                    Get Started
                                </a>
                            </li>
                        </ul>
                        <i className={buttonClass} onClick={handleClick} />
                    </nav>
                    {/* .navbar */}
                </div>
            </header>
            {/* End Header */}


            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <h1>Better Solutions For Your Business</h1>
                            <h2>
                                We are team of talented designers making websites with Bootstrap
                            </h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started scrollto">
                                    Get Started
                                </a>
                                <a
                                    href="#"
                                    className="glightbox btn-watch-video"
                                >
                                    <i className="bi bi-play-circle" />
                                    <span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 order-1 order-lg-2 hero-img"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <img
                                src={img}
                                className="img-fluid animated"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero */}
        </>
    )
}
