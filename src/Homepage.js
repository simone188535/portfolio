// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import {
    // TweenLite, 
    TimelineLite,
    // Circ 
} from "gsap/TweenMax";
import $ from 'jquery';
import { heroRightAnimation } from './js/heroRightAnimation';
import { heroLeftAnimation } from './js/heroLeftAnimation';
import { isInViewport } from './js/isInViewport';
import SubHeadComponent from './components/SubHeadComponent';
// import { passArgsToCheckViewPoint } from './js/passArgsToCheckViewPoint';

const Homepage = () => {

    // const [firstTrigger, setFirstTrigger] = useState(false);
    // const [secondTrigger, setSecondTrigger] = useState(false);
    // const [thirdTrigger, setThirdTrigger] = useState(false);

    const heroAnimation = (heroIdent1, heroIdent2) => {
        //if this is in viewpoint activate animation
        if (isInViewport($(heroIdent1))) {
            heroLeftAnimation();
        }
        if (isInViewport($(heroIdent2))) {
            heroRightAnimation();
        }

    }
    const subSectionHeadAnimation = (ident) => {

        const tl = new TimelineLite();

        if (isInViewport($(ident))) {

            const args = tl.to($(ident), 1.8, { y: 30, opacity: 1 });
            return args;
        }
    }

    const allAnimation = () => {

        // const scrollTop = window.pageYOffset;

        //make a passArgsToCheckViewPoint in external file with 2 params the first is the id that needs to be passed. The second 
        //is a variable containing the code green sock. If the first param is true, run the variable.
        // $.fn.passArgsToCheckViewPoint = (ident) => {

        //     if (isInViewport($(ident))) {

        //         tl.to($(ident), 1, {
        //             y: 50,
        //             opacity: 1
        //         });

        //     }
        // }
        heroAnimation('#hero-left', '#hero-right');
        //This may seem redundant but it is done for accuracy. I had not choice.
        subSectionHeadAnimation('#trigger1');
        subSectionHeadAnimation('#trigger2');
        subSectionHeadAnimation('#trigger3');

        // let scope;
        // const theAnimation =  'tl.to($('+ this + '), 1, {y: 50,opacity: 1 })';

        // passArgsToCheckViewPoint('#trigger1', theAnimation);

        // $(window).passArgsToCheckViewPoint('#trigger1');
        // $(window).passArgsToCheckViewPoint('#trigger2');
        // $(window).passArgsToCheckViewPoint('#trigger3');
        //}

        return false;
        // console.log(window.scrollY);
    }

    const trigger = {
        sectionNum: 'section-second',
        ident: 'trigger1',
        text: 'Skills'

    }
    const trigger2 = {
        sectionNum: 'section-third',
        ident: 'trigger2',
        text: 'Clients I Have Worked For'

    }
    const trigger3 = {
        sectionNum: 'section-four',
        ident: 'trigger3',
        text: 'Still Learning'

    }
    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);

    });

    return (
        <div className="home">
            <div className="container-fluid">
                <div className="row jumbo-head section-one" >
                    <div id="hero-left" className="col-md-6 vh-100 primary-background position-relative">
                        <div id="jumbo-head-container" className="text-align-left position-absolute header-text-container" >
                            <div className="header-thin primary-dark-color headline-thin">Hello. My name is ...</div>
                            <h1 className="header-medium white headline-med">Simone Anthony</h1>
                            <div className="header-medium primary-dark-color headline-med">Full Stack Web Developer.</div>
                        </div>
                    </div>
                    <div id="hero-right" className="col-md-6 vh-100 secondary-background position-relative">
                        <div id="circle-to-bg" className="position-absolute" ></div>
                        <div id="light-header-box" className="header-box position-absolute all-boxes"></div>
                        <div id="mid-header-box" className="position-absolute all-boxes"></div>
                        <div id="dark-header-box" className="header-box position-absolute all-boxes"></div>

                    </div>

                </div>
                <div className="vh-100 bg-white">
                    <SubHeadComponent {...trigger} />
                </div>
                {/* <div id="first-card-container" className="col-12">
                        <div className="card col-md-4" >
                            <img className="card-img-top" src="#" alt="istest" />
                            <div className="card-body">
                                <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-md-4" >
                            <img className="card-img-top" src="#" alt="istest" />
                            <div className="card-body">
                                <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-md-4" >
                            <img className="card-img-top" src="#" alt="istest" />
                            <div className="card-body">
                                <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                            </div>
                        </div>
                    </div> */}


                <div className="vh-100 bg-gold">
                    <SubHeadComponent {...trigger2} />

                </div>
                <div className="vh-100 bg-pink">
                    <SubHeadComponent {...trigger3} />

                </div>

            </div>
        </div>
    );
    // }
}

export default Homepage;