import React from 'react'
import img from '../assets/img/portfolio/portfolio-2.jpg'

export default function Gellary() {
    return (
        <>
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <ul
                        id="portfolio-flters"
                        className="d-flex justify-content-center"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <li data-filter="*" className="filter-active">
                            All
                        </li>
                    </ul>
                    <div
                        className="row portfolio-container"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-img">
                                <img
                                    src={img}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-img">
                                <img
                                    src={img}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-img">
                                <img
                                    src={img}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/* End Portfolio Section */}
        </>

    )
}
