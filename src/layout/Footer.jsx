import React from 'react'

export default function Footer() {
    return (
        <>
            {/* ======= Footer ======= */}
            <footer id="footer">
                {/* <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>
                                    Tamen quem nulla quae legam multos aute sint culpa legam noster
                                    magna
                                </p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="button" defaultValue="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Technopro.pk</h3>
                                <p> Lahore, Pakistan
                                    <br />
                                    <strong>Phone:</strong> 0332 5715 5075
                                    <br />
                                    <strong>Email:</strong> info@technopro.pk
                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /><a href="#hero">Home</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /><a href="#about">About</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /><a href="#">ERP</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /><a href="#services">Services</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /><a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Product Management</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Graphic Design</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>We prioritize quality in our software products and ensure excellence in every step of the development process.</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter">
                                        <i className="bx bxl-twitter" />
                                    </a>
                                    <a href="#" className="facebook">
                                        <i className="bx bxl-facebook" />
                                    </a>
                                    <a href="#" className="instagram">
                                        <i className="bx bxl-instagram" />
                                    </a>
                                    <a href="#" className="google-plus">
                                        <i className="bx bxl-skype" />
                                    </a>
                                    <a href="#" className="linkedin">
                                        <i className="bx bxl-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        © Copyright{" "}
                        <strong>
                            <span>technopro.pk</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="http://claystone.pk/">ClayStone.pk</a>
                    </div>
                </div>
            </footer>
            {/* End Footer */}

        </>
    )
}
