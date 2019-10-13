import React, { useEffect } from 'react';



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
                            <div className="all-details">
                                <div className="first-half">
                                    <div className="float-left details">
                                    <div className="detail-title">Phone</div>
                                    <div className="detail-description">

                                    </div>
                                    </div>
                                    <div className="float-left details">
                                    <div className="detail-title">Email</div>
                                    <div className="detail-description"></div>
                                    </div>
                                </div>
                                <div className="second-half">
                                    <div className="float-left details">
                                    <div className="detail-title">City</div>
                                    <div className="detail-description">
                                        
                                    </div>
                                    </div>
                                    <div className="float-left details">
                                    <div className="detail-title">Follow</div>
                                    <div className="detail-description"></div>
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