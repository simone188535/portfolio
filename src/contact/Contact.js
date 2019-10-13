import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';



const Contact = () => {

    const allAnimation = () => {
        // aboutHeroAnimation('#left-hero-content', '#right-hero-content');
        // aboutMeSectionAnimation('#about-me-trigger');
        console.log('test');
    }
    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);
        // console.log('active');

    });

    return (
        <div className="contact">
            <div className="container-fluid ">
                <div className="row" >
                    <div className="col-md-6 vh-100 bg-soft-black left-section">
                        <div className="position-relative left-text-container">
                            <div className="all-details row">
                                <div className="half col-12">
                                    <div className="float-left details col-6">
                                        <div className="detail-title">Phone</div>
                                        <div className="detail-description">
                                            (404)-397-9523
                                        </div>
                                    </div>
                                    <div className="float-left details col-6">
                                        <div className="detail-title">Email</div>
                                        <div className="detail-description">
                                            simone.anthony1@yahoo.com
                                        </div>
                                    </div>
                                </div>
                                <div className="half col-12">
                                    <div className="float-left details col-6">
                                        <div className="detail-title">City</div>
                                        <div className="detail-description">
                                        Stone Mountain, Georgia
                                        </div>
                                    </div>
                                    <div className="float-left details col-6">
                                        <div className="detail-title">Follow</div>
                                        <div className="detail-description">
                                        <a href="https://www.linkedin.com/in/simone-anthony-059066136/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-linkedin-square"></i>
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 vh-100 bg-pale-peach right-section">
                        <div className="position-relative right-text-container">Contact Me Anytime.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;