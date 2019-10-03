// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';

import { heroRightAnimation } from './js/heroRightAnimation';
import { heroLeftAnimation } from './js/heroLeftAnimation';
import { isInViewport } from './js/isInViewport';
import SubHeadComponent from './components/SubHeadComponent';
import CardContainerComponent from './components/CardContainerComponent';
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

    };

    const subSectionHeadAnimation = (ident) => {

        const tl = new TimelineLite();

        if (isInViewport($(ident))) {

            return tl.to($(ident), 1.8, { y: 30, opacity: 1 });

        }
    };

    const staggerCards = (ident) => {

        const tl = new TimelineLite();

        //only activates in Viewpoint when parent id (ident) is correct.
        //It uses css selector syntax to determine which card section  should be selected

        if (isInViewport($(ident))) {
            // console.log(ident);
            // return tl.staggerTo(".all-cards" + ident + " > .card", 2, { y: 30, opacity: 1 }, 0.25);
            return tl.staggerTo(ident +".all-cards  .card", 2, { y: 15, opacity: 1 }, 0.5);
        }
    };

    const allAnimation = () => {

        heroAnimation('#hero-left', '#hero-right');

        staggerCards('#first-card-container');
        //This may seem redundant but it is done for accuracy. I had not choice.
        subSectionHeadAnimation('#trigger1');
        subSectionHeadAnimation('#trigger2');
        subSectionHeadAnimation('#trigger3');

        return false;
    };
    //these correspond to the SubHead Component. Just simple data
    const SubHeadTrigger = {
        // sectionNum: 'section-second',
        ident: 'trigger1',
        text: 'Skills'

    };
    const SubHeadTrigger2 = {
        // sectionNum: 'section-third',
        ident: 'trigger2',
        text: 'Clients I Have Worked For'

    };
    const SubHeadTrigger3 = {
        // sectionNum: 'section-four',
        ident: 'trigger3',
        text: 'Still Learning'

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
                    <div id="hero-right" className="col-md-6 vh-100 secondary-background position-relative">
                        <div id="circle-to-bg" className="position-absolute" ></div>
                        <div id="light-header-box" className="header-box position-absolute all-boxes"></div>
                        <div id="mid-header-box" className="position-absolute all-boxes"></div>
                        <div id="dark-header-box" className="header-box position-absolute all-boxes"></div>

                    </div>

                </div>

                {/* <div className=" vh-100 bg-white"> */}
                <div className="section-second">
                    <SubHeadComponent {...SubHeadTrigger} />
                    <CardContainerComponent ident="first-card-container" />

                </div>


                 {/* <div className=" vh-100 bg-gold"> */}
                <div className="section-third position-relative">
                    <div className="row">
                    <div className="col-md-4 bg-orange-red vh-100">
                        <div id="left-text-container" className="position-relative">
                            {/* <img  class="img-fluid" src="https://dgpr.s3.amazonaws.com/images/project/photo-1510148199876-8a856ee41d42.jpeg" /> */}
                            <div className="section-three-small-col">
                            <div id="line-1" className="small-col-line">Want to</div>
                            <div id="line-2" className="small-col-line">Learn</div> 
                            <div id="line-3" className="small-col-line">More?</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 bg-pale-peach vh-100">
                        
                    <div id="right-text-container" className="position-relative">
                                <div id="large-line-1" className="large-col-line">For information </div>
                                <div id="large-line-2" className="large-col-line"> about employment history, resume and aspirations...</div>
                                <div id="large-line-3" className="large-col-line">click here</div>
                            </div>
                    </div>
                    </div>
                    {/* <SubHeadComponent {...SubHeadTrigger2} />
                    <CardContainerComponent ident="second-card-container"/> */}

                </div>
                {/*
                 <div className="vh-100 bg-pink">
                    <SubHeadComponent {...SubHeadTrigger3} />

                </div>  */}

            </div>
        </div>
    );
    // }
}

export default Homepage;