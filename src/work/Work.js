import React, { useEffect } from 'react';
import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import SubHeadComponent from '../components/SubHeadComponent';


const Work = () => {


    const allAnimation = () => {
        console.log('working');
    }
    const workTrigger = {
        ident: 'workTrigger',
        text: 'Previous Clients'

    };
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
                                <div className="hero-text position-relative h-100">
                                    <div className="hero-text-container position-absolute"><div className="float-left">Work</div><div className="float-left">.</div></div>
                                    {/* <div id="scaling-period" className=""></div> */}
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <SubHeadComponent {...workTrigger} />
                <div className="row">

                </div>
            </div>
        </div>
    );
}

export default Work;