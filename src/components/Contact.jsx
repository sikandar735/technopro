import React from 'react'

export default function Contact() {
    return (
        <>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p className='text-justify-on-small-device'>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>Lahore, Pakistan</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>info@technopro.pk</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>0332 5715 5075</p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d61085.42808888615!2d74.38837261727012!3d31.515688511573362!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681386223427!5m2!1sen!2s"
                                    style={{ border: 0, width: "100%", height: 290 }}
                                    allowFullScreen=""
                                    frameBorder={0}
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form
                                action=""
                                method="post"
                                role="form"
                                className="php-email-form"
                            >
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        required=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={10}
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </>

    )
}
