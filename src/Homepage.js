import React, { useState, useEffect } from 'react';
import { TweenLite, TimelineLite, Circ } from "gsap/TweenMax";
import  { heroRightAnimation } from './js/heroRightAnimation';
import  { heroLeftAnimation } from './js/heroLeftAnimation';
import { isInViewport } from './js/isInViewport';
import $ from 'jquery';


const Homepage = () => {

    const [firstTrigger, setFirstTrigger] = useState(false);
    // const [secondTrigger, setSecondTrigger] = useState(false);
    // const [thirdTrigger, setThirdTrigger] = useState(false);

    const heroAnimation = () => {
        
        heroLeftAnimation();
        heroRightAnimation();

    }
    const subSectionAnimation = () => {

        const tl = new TimelineLite();
        // const scrollTop = window.pageYOffset;

        if (firstTrigger === false) {
            
            if (isInViewport('#trigger')) {
                tl.to($('#trigger'), 1, {
                    opacity: 1
                });
                setFirstTrigger(true);
            }
        }
        return false;
        // console.log(window.scrollY);
    }


    useEffect(() => {
        heroAnimation();
        subSectionAnimation();
        window.addEventListener('scroll', subSectionAnimation);

    });

    return (
        <div className="home">
            <div className="container-fluid">
                <div className="row jumbo-head section-one" >
                    <div className="col-md-6 vh-100 primary-background position-relative">
                        <div id="jumbo-head-container" className="text-align-left position-absolute header-text-container" >
                            <div className="header-thin primary-dark-color headline-thin">Hello. My name is ...</div>
                            <h1 className="header-medium white headline-med">Simone Anthony</h1>
                            <div className="header-medium primary-dark-color headline-med">Full Stack Web Developer.</div>
                        </div>
                    </div>
                    <div id="hpHeaderAnimatedSectionContainer" className="col-md-6 vh-100 secondary-background position-relative">
                        <div id="circle-to-bg" className="position-absolute" ></div>
                        <div id="light-header-box" className="header-box position-absolute all-boxes"></div>
                        <div id="mid-header-box" className="position-absolute all-boxes"></div>
                        <div id="dark-header-box" className="header-box position-absolute all-boxes"></div>

                    </div>

                </div>
                <div className="row vh-100 section-second">
                    <div className="col-12">
                        <h2 id="trigger" className="text-center sub-section-header">Skills</h2>
                    </div>
                </div>

                <div className="row vh-100 section-third">
                    <div className="col-12">
                        <h2 className="text-center sub-section-header">Clients I Have Worked For</h2>
                    </div>
                </div>
                <div className="row vh-100 section-fourth">
                    <div className="col-12">
                        <h2 className="text-center sub-section-header">Still Learning</h2>
                    </div>
                </div>

            </div>
        </div>
    );
    // }
}

export default Homepage;