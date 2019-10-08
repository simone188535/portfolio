import React, { useEffect } from 'react';
import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import SubHeadComponent from '../components/SubHeadComponent';
// import SubHeadComponent from './components/SubHeadComponent';


const About = () => {

    const aboutHeroAnimation = (heroIdent1,heroIdent2) => {

        const tl = new TimelineLite();
        if (isInViewport($(heroIdent1))) {
            // heroLeftAnimation();

            // tl.to($('#bottom-to-top'), .5, {
            //     height: "100%"
            // })
           tl.to($('#hero-text-left'), 1, {
                opacity: 1
            });
            
        }
        if (isInViewport($(heroIdent2))) {
            tl.to($('#top-to-bottom'), .5, {
                height: "100%"
            })
            .to($('#hero-text-right'), .5, {
                opacity: 1
            });
        }
    }
    const allAnimation = () => {
        aboutHeroAnimation('#left-hero-content','#right-hero-content');
    }
    const SubHeadTrigger = {
        ident: 'aboutTrigger1',
        text: 'Resume'

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
                                        <div className="hero-text hero-text-right-bottom position-relative">I'd prefer to use React but, Im just as adequate (if not more) with the other technologies ive learned</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <SubHeadComponent {...SubHeadTrigger} />
            </div>
        </div>);
}
export default About;