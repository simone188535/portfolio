import React, { Component} from 'react';
import {TweenMax, TweenLite} from "gsap/TweenMax";
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";


class Homepage extends Component {
    // const Homepage = () => {
    constructor(){
        super();
        // this.circleToBG = React.createRef();
        //ref to dom node
        this.jumboHeadContainer = null;
    }

    // simpleRef = createRef();
    // let logoItem = useRef(null);
    
    // console.log(logoItem);
    headerText = () => {
        TweenLite.to(this.jumboHeadContainer, 1, {x: 100, y: 100});
    }
    componentDidMount(){
        this.headerText();
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
                            <div className="text-align-left position-absolute header-text-container"  ref={div => this.jumboHeadContainer = div}>
                                <div className="header-thin primary-dark-color headline-thin">Hello. My name is ...</div>
                                <h1 className="header-medium white headline-med">Simone Anthony</h1>
                                <div className="header-medium primary-dark-color headline-med">Full Stack Web Developer.</div>
                            </div>
                        </div>
                        <div className="col-md-6 vh-100 secondary-background position-relative">
                            <div id="black-circle-to-bg" className="position-absolute" ref={this.circleToBG}>
                            </div>
                                <div id="light-header-box" className="header-box position-absolute"></div>
                                <div id="mid-header-box" className="position-absolute"></div>
                                <div id="dark-header-box" className="header-box position-absolute"></div>
                            
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