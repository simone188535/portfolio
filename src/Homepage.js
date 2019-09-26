import React, { useState, useEffect } from 'react';
import { TweenLite, TimelineLite, Circ } from "gsap/TweenMax";


const Homepage = () => {

    const [firstTrigger, setFirstTrigger] = useState(false);
    // const [secondTrigger, setSecondTrigger] = useState(false);
    // const [thirdTrigger, setThirdTrigger] = useState(false);

    const hpHeaderTextSection = () => {
        TweenLite.to('#jumbo-head-container', 2, { y: 50, opacity: 1 });
    }
    const hpHeaderAnimatedSection = () => {

        //for Later: use timeLine tool (greensock) to start an svg "orbit animation" after these action are completed. reference: https://codepen.io/guerreiro/pen/obhzc
        const tl = new TimelineLite();
        // tl.from();
        //incase I forget later, "together" (can be replaced with any word) allows tl's to run at the same time. this "-=(number)" allows animations to overlap. reference: https://www.youtube.com/watch?v=sXJKg8SUSLI&t=85s
        // 7 minute mark
        tl.to('#circle-to-bg', 1, {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 1,
            ease: Circ.easeOut
        });
        tl.to('#circle-to-bg', 1, {
            borderRadius: 0
        }, "together-=.25");
        tl.to('.all-boxes', 1, {
            opacity: .9
        }, "together-=.4");

    }
    const subSectionAnimation = () => {

        const tl = new TimelineLite();

        if (firstTrigger === false) {
            if (window.scrollY > 400) {
                tl.to('#trigger', 1, {
                    opacity: 1
                });
                setFirstTrigger(true);
            }
        }
        return false;
        // console.log(window.scrollY);
    }


    useEffect(() => {
        hpHeaderTextSection();
        hpHeaderAnimatedSection();
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