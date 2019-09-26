import React, { Component } from 'react';
import { TweenLite, TimelineLite, Circ } from "gsap/TweenMax";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
// import { Tween, Timeline } from "react-gsap";
// import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.js';




class Homepage extends Component {
    // const Homepage = () => {
    // simpleRef = createRef();
    // let logoItem = useRef(null);
    // constructor() {
    //     super();
        // this.controller = new ScrollMagic.Controller();
        // this.state = {
        //     sectionTwoAnimation: false,
        //     sectionThreeAnimation: false,
        //     sectionFourAnimation: false

        // }
    // }

    // console.log(logoItem);

    hpHeaderTextSection = () => {
        TweenLite.to('#jumbo-head-container', 2, { y: 50, opacity: 1 });
    }
    hpHeaderAnimatedSection = () => {

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
    subSectionAnimation() {
        // const tl = new TimelineLite();
        // tl.to('.sub-section-header', 1, {
        //     opacity: 1
        // });


    }

    componentDidMount() {
        this.hpHeaderTextSection();
        this.hpHeaderAnimatedSection();
        this.subSectionAnimation();
        // window.addEventListener('scroll', scrollTrigger);
    }
    render() {

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
                            <Controller>
                                <Scene duration={300} reverse={false}
                                    triggerElement=".sub-section-header">
                                    <Tween
                                        to={{ opacity: 1 }}
                                    >
                                        <h2 id="trigger" className="text-center sub-section-header">Skills</h2>
                                    </Tween>
                                </Scene>
                            </Controller>
                        </div>
                    </div>

                    {/* </Scene>
                        </Controller> */}

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
    }
}

export default Homepage;