import React, { useEffect } from 'react';
// import { TimelineLite,TweenMax} from "gsap/TweenMax";
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import SubHeadComponent from '../components/SubHeadComponent';
// import SubHeadComponent from './components/SubHeadComponent';


const About = () => {

    const aboutHeroAnimation = (heroIdent1) => {
        
        if (isInViewport($(heroIdent1))) {
            // heroLeftAnimation();
            console.log('animation');
        }
    }
    const allAnimation = () => {
        aboutHeroAnimation();
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
                            <div className="hero-section w-100">
                            
                            <div className="h-100">
                                <h1 className="hero-text hero-text-left position-relative">
                                <div className="header-medium">About</div>
                                <div className="header-medium">Me</div>
                                </h1>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-9 px-0 right-hero ">
                        <div className="hero-section w-100">
                            
                            <div className="hero-text hero-text-right-top position-relative">
                            "I am a web developer who wants to create exciting Projects. "
                            </div>
                            <div className="hero-text hero-text-right-bottom position-relative">I'd prefer to use React but, Im just as adequate (if not more) with the other technologies ive learned</div>
                        
                        </div>
                    </div>

                </div>
                <SubHeadComponent {...SubHeadTrigger}/>
            </div>
        </div>);
}
export default About;