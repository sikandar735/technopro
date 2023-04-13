import React from 'react'

import logo1 from '../assets/img/clients/client-1.png'
import logo2 from '../assets/img/clients/client-2.png'
import logo3 from '../assets/img/clients/client-3.png'
import logo4 from '../assets/img/clients/client-4.png'
import logo5 from '../assets/img/clients/client-5.png'
import logo6 from '../assets/img/clients/client-6.png'

export default function Partner() {
    return (
        <>
            {/* ======= Clients Section ======= */}
            <section id="clients" className="clients section-bg">
                <div className="container">
                    <div className="row" data-aos="zoom-in">
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={logo1}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={logo2}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={logo3}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={logo4}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={logo5}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={logo6}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Cliens Section */}
        </>

    )
}
