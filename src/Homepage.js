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
import  SubHeadComponent from './components/SubHeadComponent';
// import { passArgsToCheckViewPoint } from './js/passArgsToCheckViewPoint';

const Homepage = () => {

    // const [firstTrigger, setFirstTrigger] = useState(false);
    // const [secondTrigger, setSecondTrigger] = useState(false);
    // const [thirdTrigger, setThirdTrigger] = useState(false);

    const heroAnimation = () => {
       
        //
        heroLeftAnimation();
        heroRightAnimation();

    }
    const subSectionHeaderAnimation =  (ident) => {
        
        const tl = new TimelineLite();
        
         if (isInViewport($(ident))) {

            const args = tl.to($(ident), 1, {y: 50,opacity: 1 });
            return args;
        }
    }

    const subSectionAnimation = () => {

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
        subSectionHeaderAnimation('#trigger1');
        subSectionHeaderAnimation('#trigger2');
        subSectionHeaderAnimation('#trigger3');

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
                        <SubHeadComponent ident="trigger1" text="Skills"/>
                    </div>
                </div>

                <div className="row vh-100 section-third">
                    <div className="col-12">
                    <SubHeadComponent ident="trigger2" text="Clients I Have Worked For"/>
                    </div>
                </div>
                <div className="row vh-100 section-fourth">
                    <div className="col-12">
                        <SubHeadComponent ident="trigger3" text="Still Learning"/>
                    </div>
                </div>

            </div>
        </div>
    );
    // }
}

export default Homepage;