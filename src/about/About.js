import React, { useEffect } from 'react';
import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import SubHeadComponent from '../components/SubHeadComponent';
import PDFDisplayButtonComponent from '../components/PDFDisplayButtonComponent';
// import SubHeadComponent from './components/SubHeadComponent';


const About = () => {

    const aboutHeroAnimation = (heroIdent1, heroIdent2) => {

        const tl = new TimelineLite();
        if (isInViewport($(heroIdent1))) {

            tl.to($('#hero-text-left'), 1.5, {
                opacity: 1
            });

        }
        if (isInViewport($(heroIdent2))) {
            tl.to($('#top-to-bottom'), .5, {
                height: "100%"

            }, "-=1")
                .to($('#hero-text-right'), .5, {
                    opacity: 1,
                    y:-10
                });
        }
    }
    const aboutMeSectionAnimation = (aboutMeIdent) => {
        const tl = new TimelineLite();
        if (isInViewport($(aboutMeIdent))) {
            tl.to($('#about-me-left'), .5, {
                opacity: 1,
                x: 30
            }, "sameTime")
                .to($('#about-me-right'), .5, {
                    opacity: 1,
                    x: -30
                }, "sameTime");
        }

    }
    const allAnimation = () => {
        aboutHeroAnimation('#left-hero-content', '#right-hero-content');
        aboutMeSectionAnimation('#about-me-trigger');
    }
    const AboutTrigger = {
        ident: 'aboutTrigger1',
        text: 'Resume'

    };
    const AboutTrigger2 = {
        ident: 'aboutTrigger2',
        text: 'Aspirations'

    };


    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);
        // console.log('active');

    });

    return (
        <div className="about">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-3 px-0 left-hero ">
                        <div className="hero-section w-100 position-relative">

                            <div className="h-100" id="left-hero-content">
                                {/* <div id="bottom-to-top" className="position-absolute w-100"> */}
                                <div id="hero-text-left" className="hero-text  position-relative">
                                    <div className="header-medium">About</div>
                                    <div className="header-medium">Me</div>
                                </div>
                            </div>
                            {/* </div> */}


                        </div>
                    </div>
                    <div className="col-md-9 px-0 right-hero ">
                        <div className="hero-section w-100 position-relative">
                            <div className="h-100" id="right-hero-content">
                                <div id="top-to-bottom" className="position-absolute w-100">
                                    <div id="hero-text-right" className="position-relative">
                                        <div className="hero-text hero-text-right-top position-relative">
                                            "I am a web developer who wants to create exciting Projects. "
                                </div>
                                        <div className="hero-text hero-text-right-bottom position-relative">I'd prefer to use React but, Im just as adequate (if not more) with the other technologies I've learned.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="resume-section">
                    <SubHeadComponent {...AboutTrigger} />
                    <PDFDisplayButtonComponent />
                </div>
                <div id="about-me-trigger" className="about-me">

                    <div className="row">
                        <div id="about-me-left" className="col-md-4 offset-md-2  position-relative">
                            <img id="personal-img" className="img-fluid" src="https://dgpr.s3.amazonaws.com/images/project/profile-anonymous.jpg" alt="Simone Anthony" />
                        </div>
                        <div id="about-me-right" className="col-md-4  position-relative">

                            <div id="personal-text-container">
                                <h2>Me</h2>
                                <div>
                                    I am a web developer with 2+ years of experience who enjoys building fun and creative projects.
                                    Web development is my passion and I enjoy writing and building personal projects on my free time.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-red-orange">
                <div className="aspiration-section">
                    <SubHeadComponent {...AboutTrigger2} />
                    <div className="row">
                        <div className="col-12 aspiration-container">
                            <ul className="aspiration-list">
                                <li id="aspiration-list-item-1" className="aspiration-item position-relative">I would like to become a full Stack JavaScript Developer (preferable the MERN stack).</li>
                                <li id="aspiration-list-item-2" className="aspiration-item position-relative">I am currently learning Node.js, Express and  MongoDB. </li>
                                <li id="aspiration-list-item-3" className="aspiration-item position-relative">In the future I would also like to create my own animation Library and put it on github. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default About;