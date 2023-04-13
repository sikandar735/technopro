import React from 'react'
// import img1 from '../assets/img/team/team-1.jpg'
// import img2 from '../assets/img/team/team-2.jpg'
// import img3 from '../assets/img/team/team-3.jpg'
// import img4 from '../assets/img/team/team-4.jpg'
import demo1 from '../assets/img/team/demo2.png'
import demo2 from '../assets/img/team/demo3.png'


export default function Team() {
    return (
        <>
            {/* ======= Team Section ======= */}
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Team</h2>
                        <p className='text-justify-on-small-device'>Our team is comprised of highly talented and respected individuals with diverse backgrounds and skill sets. We work collaboratively and strive for excellence in all aspects of our work. Together, we are a strong and dynamic force that delivers exceptional results.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src={demo2}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Ali</h4>
                                    <span>Developer</span>
                                    <p>I appreciate the company's commitment to diversity and inclusion, creating a welcoming environment for all employees.</p>
                                    <div className="social">
                                        <a href="">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-instagram-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-linkedin-box-fill" />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 mt-4 mt-lg-0"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src={demo1}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Anwar</h4>
                                    <span>Developer</span>
                                    <p>
                                        The opportunities for professional growth and development within the company are unmatched in the industry.
                                    </p>
                                    <div className="social">
                                        <a href="">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-instagram-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-linkedin-box-fill" />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src={demo1}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Fahad</h4>
                                    <span>Developer</span>
                                    <p>I am proud to work for a company that prioritizes ethical business practices and corporate responsibility.</p>
                                    <div className="social">
                                        <a href="">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-instagram-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-linkedin-box-fill" />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay={400}>
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src={demo2}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Ahmed</h4>
                                    <span>Developer</span>
                                    <p>The team-oriented culture fosters collaboration and communication, enabling us to achieve outstanding results for our clients.</p>
                                    <div className="social">
                                        <a href="">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-instagram-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-linkedin-box-fill" />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Team Section */}
        </>

    )
}
