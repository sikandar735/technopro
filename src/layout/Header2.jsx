import { useState } from "react";
import logo from '../assets/img/ts-logo.png'


export default function Header2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <header id="header" className="fixed-top bg-white">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </h1>
                <nav id="navbar" className={`navbar ${isOpen ? "navbar-mobile" : ""}`}>
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
                    <i className={`bi text-dark mobile-nav-toggle ${isOpen ? "bi-x" : "bi-list"}`} onClick={toggleMenu} />
                </nav>
            </div>
        </header>


    );
}