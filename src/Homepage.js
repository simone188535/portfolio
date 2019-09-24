import React, { Component, useRef,useEffect } from 'react';
// import stockImage from './assets/m-n-TgAqZAd9InA-unsplash.jpg';
import { Tween, Power3 } from 'react-gsap';
// import logo from './logo.png';

// class Homepage extends Component {
    const Homepage = () => {

    // simpleRef = createRef();
    let logoItem = useRef(null);
    
    console.log(logoItem);
    // componentDidMount(){

    // }
    // render() {
        useEffect(()=>{
            console.log(logoItem);
        });
        return (
            <div className="home">
                <div className="container-fluid">
                    <div className="row jumbo-head section-one ">
                        <div className="col-md-6 vh-100 primary-background position-relative">
                            <div className="text-align-left position-absolute header-text-container">
                                <div className="header-thin primary-dark-color headline-thin">Hello. My name is ...</div>
                                <h1 className="header-medium white headline-med">Simone Anthony</h1>
                                <div className="header-medium primary-dark-color headline-med">Full Stack Web Developer.</div>
                            </div>
                        </div>
                        <div className="col-md-6 vh-100 secondary-background position-relative">
                            <div id="black-circle-to-bg" className="position-absolute">
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
                    {/* <div className="row">
                            <div className="offset-md-7 col-md-5 position-relative px-0">
                                <img className="w-100 img-fluid header-img" src={stockImage} alt="concrete building"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7 position-relative">
                            <div className="text-align-left position-absolute header-text-container">
                                <div className="header-thin primary-dark-color headline-thin">Hello. My name is ...</div>
                                <h1 className="header-medium primary-color-light headline-med">Simone Anthony</h1>
                                <div className="header-medium primary-dark-color headline-med">Full Stack Web Developer.</div>
                            </div>
                            </div>
                        </div> */}
                </div>
            </div>
        );
    // }
}

export default Homepage;