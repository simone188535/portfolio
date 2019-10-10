import React, { useEffect } from 'react';

const Work = () => {


    const allAnimation = () => {
        console.log('working');
    }
    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);
        // console.log('active');

    });

    return (
        <div className="work">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 bg-red-orange">
                        <div className="hero-section w-100">
                            <div className="h-100" id="hero-content">
                                <div className="hero-text position-relative">
                                    Work
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Work;