// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { TimelineLite } from "gsap/TweenMax";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';

import { heroRightAnimation } from './js/home/heroRightAnimation';
import { heroLeftAnimation } from './js/home/heroLeftAnimation';
import { isInViewport } from './js/isInViewport';
import SubHead from './SubComponents/SubHead';
import SkillsCardContainer from './SubComponents/SkillsCardContainer';



const Homepage = () => {

    const heroAnimation = (heroIdent1, heroIdent2) => {
        //if this is in viewpoint activate animation
        if (isInViewport($(heroIdent1))) {
            heroLeftAnimation();
        }
        if (isInViewport($(heroIdent2))) {
            heroRightAnimation();
        }

    };


    const finalSection = (ident1) => {
        const tl = new TimelineLite();

        if (isInViewport($(ident1))) {
            tl.to($(ident1), 1, { x: "12%", opacity: 1 });
        }
    }

    const allAnimation = () => {
        heroAnimation('#hero-left', '#hero-right');

        finalSection('#left-text-container', '#right-text-container');

        return false;
    };
    //these correspond to the SubHead Component. Just simple data
    const SubHeadTrigger = {
        ident: 'trigger1',
        text: 'Skills'

    };


    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);

    });

    return (
        <div className="home">
            <Container fluid={true}>
                <Row className="jumbo-head section-one" >
                    <Col id="hero-left" md={6} className="vh-100 bg-red-orange position-relative">
                        <div className="jumbo-center">
                            <div id="jumbo-head-container" className="text-align-left position-absolute header-text-container" >
                                <div className="header-thin primary-dark-color headline-thin">Hello. My name is ...</div>
                                <h1 className="header-medium white headline-med">Simone Anthony</h1>
                                <div className="header-medium primary-dark-color headline-med">Full Stack Web Developer.</div>
                            </div>
                        </div>
                    </Col>
                    <Col id="hero-right" md={6} className="vh-100 secondary-background position-relative hero-right-container">
                        <div id="circle-to-bg" className="position-absolute" ></div>
                        <div className="animation-container">
                            <div id="light-header-box" className="header-box position-absolute all-boxes"></div>
                            <div id="mid-header-box" className="position-absolute all-boxes"></div>
                            <div id="dark-header-box" className="header-box position-absolute all-boxes"></div>
                        </div>

                    </Col>

                </Row>
                <div className="section-second">
                    <SubHead {...SubHeadTrigger} />
                    <SkillsCardContainer ident="first-card-container" />

                </div>

                <div className="section-third position-relative">
                    <Row>
                        <Col md={4} className="bg-red-orange vh-100 three-line-container">
                            <div id="left-text-container" className="position-relative">
                                <div className="section-three-small-col">
                                    <div id="line-1" className="small-col-line">Want to</div>
                                    <div id="line-2" className="small-col-line">Learn</div>
                                    <div id="line-3" className="small-col-line">More?</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} className="bg-pale-peach vh-100">

                            <div id="right-text-container" className="position-relative">
                                <div className="section-three-large-col">
                                    <div id="large-line-1" className="large-col-line">For information </div>
                                    <div id="large-line-2" className="large-col-line"> about employment history, resume and aspirations...</div>
                                    <Link to="/about"><div id="large-line-3" className="large-col-line">click here</div></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
    // }
}

export default Homepage;