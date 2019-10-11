// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { TimelineLite } from "gsap/TweenMax";
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { heroRightAnimation } from './js/heroRightAnimation';
import { heroLeftAnimation } from './js/heroLeftAnimation';
import { isInViewport } from './js/isInViewport';
import SubHeadComponent from './components/SubHeadComponent';
import SkillsCardContainerComponent from './components/SkillsCardContainerComponent';


const Homepage = () => {

    const heroAnimation = (heroIdent1, heroIdent2) => {
        //if this is in viewpoint activate animation
        if (isInViewport($(heroIdent1))) {
            heroLeftAnimation();
        }
        if (isInViewport($(heroIdent2))) {
            heroRightAnimation();
        }

    };

 
    const finalSection = (ident1) => {
        const tl = new TimelineLite();

        if (isInViewport($(ident1))) {
            tl.to($(ident1), 1, { x: "12%", opacity: 1 });
        }
    }

    const allAnimation = () => {
        heroAnimation('#hero-left', '#hero-right');

        // staggerCards('#first-card-container');
        // subSectionHeadAnimation('#trigger1');

        finalSection('#left-text-container', '#right-text-container');

        return false;
    };
    //these correspond to the SubHead Component. Just simple data
    const SubHeadTrigger = {
        ident: 'trigger1',
        text: 'Skills'

    };

    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);

    });

    return (
        <div className="home">
            <div className="container-fluid ">
                <div className="row jumbo-head section-one" >
                    <div id="hero-left" className="col-md-6 vh-100 primary-background position-relative">
                        <div id="jumbo-head-container" className="text-align-left position-absolute header-text-container" >
                            <div className="header-thin primary-dark-color headline-thin">Hello. My name is ...</div>
                            <h1 className="header-medium white headline-med">Simone Anthony</h1>
                            <div className="header-medium primary-dark-color headline-med">Full Stack Web Developer.</div>
                        </div>
                    </div>
                    <div id="hero-right" className="col-md-6 vh-100 secondary-background position-relative hero-right-container">
                        <div id="circle-to-bg" className="position-absolute" ></div>
                        <div id="light-header-box" className="header-box position-absolute all-boxes"></div>
                        <div id="mid-header-box" className="position-absolute all-boxes"></div>
                        <div id="dark-header-box" className="header-box position-absolute all-boxes"></div>

                    </div>

                </div>
                <div className="section-second">
                    <SubHeadComponent {...SubHeadTrigger} />
                    <SkillsCardContainerComponent ident="first-card-container" />

                </div>

                <div className="section-third position-relative">
                    <div className="row">
                        <div className="col-md-4 bg-red-orange vh-100 three-line-container">
                            <div id="left-text-container" className="position-relative">
                                <div className="section-three-small-col">
                                    <div id="line-1" className="small-col-line">Want to</div>
                                    <div id="line-2" className="small-col-line">Learn</div>
                                    <div id="line-3" className="small-col-line">More?</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 bg-pale-peach vh-100">

                            <div id="right-text-container" className="position-relative">
                                <div className="section-three-large-col">
                                    <div id="large-line-1" className="large-col-line">For information </div>
                                    <div id="large-line-2" className="large-col-line"> about employment history, resume and aspirations...</div>
                                    <Link to="/about"><div id="large-line-3" className="large-col-line">click here</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // }
}

export default Homepage;