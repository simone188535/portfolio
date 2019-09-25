import React, { Component } from 'react';
import { TweenMax, Circ } from "gsap/TweenMax";
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";


class Homepage extends Component {
    // const Homepage = () => {
    constructor() {
        super();
        // this.circleToBG = React.createRef();
        //ref to dom node
        // this.jumboHeadContainer = null;
        // this.circleToBG = null;
    }

    // simpleRef = createRef();
    // let logoItem = useRef(null);

    // console.log(logoItem);
    hpHeaderTextSection = () => {
        TweenMax.to('#jumbo-head-container', 2, { y: 50, opacity: 1 });
    }
    hpHeaderAnimatedSection = () => {
        TweenMax.to('#circle-to-bg', 1, {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 1,
            ease: Circ.easeOut
        });
        TweenMax.to('#circle-to-bg',1,{
            borderRadius: 0,
            delay: .7
        });
        TweenMax.to('.all-boxes',1,{
            opacity: .9,
            delay: 1
        });

    }

    componentDidMount() {
        this.hpHeaderTextSection();
        this.hpHeaderAnimatedSection();
    }
    render() {
        // useEffect(()=>{
        //     console.log(logoItem);
        // });

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
                            <h2 className="text-center">Skills</h2>
                        </div>
                    </div>
                    <div className="row vh-100 section-third">
                        <div className="col-12">
                            <h2 className="text-center">Clients I Have Worked For</h2>
                        </div>
                    </div>
                    <div className="row vh-100 section-fourth">
                        <div className="col-12">
                            <h2 className="text-center">Still Learning</h2>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Homepage;