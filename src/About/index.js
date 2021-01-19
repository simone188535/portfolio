import React, { useEffect } from 'react';
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SubHead from '../SubComponents/SubHead';
import PDFDisplayButton from '../SubComponents/PDFDisplayButton';

import aboutHeroAnimationLeft from '../js/about/aboutHeroAnimationLeft';
import aboutHeroAnimationRight from '../js/about/aboutHeroAnimationRight';
import aboutMeSectionAnimation from '../js/about/aboutMeSectionAnimation';


const About = () => {

    const aboutHeroAnimation = (heroIdent1, heroIdent2) => {

        if (isInViewport($(heroIdent1))) {
            aboutHeroAnimationLeft();
        }
        if (isInViewport($(heroIdent2))) {
            aboutHeroAnimationRight();
        }
       
    }
    const aboutMeSectionAnimationActivate = (aboutMeIdent) => {
        
        if (isInViewport($(aboutMeIdent))) {
            aboutMeSectionAnimation();
        }

    }
    const allAnimation = () => {
        aboutHeroAnimation('#left-hero-content', '#right-hero-content');
        aboutMeSectionAnimationActivate('#about-me-trigger');
    }
    const AboutTrigger = {
        ident: 'aboutTrigger1',
        text: 'Resume'

    };
    const AboutTrigger2 = {
        ident: 'aboutTrigger2',
        text: 'Aspirations'

    };


    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);
    });

    return (
        <div className="about">
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="px-0 left-hero ">
                        <div className="hero-section w-100 position-relative">

                            <div className="h-100" id="left-hero-content">
                                <div id="hero-text-left" className="hero-text  position-relative">
                                    <div className="header-medium">About</div>
                                    <div className="header-medium">Me</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={9} className=" px-0 right-hero ">
                        <div className="hero-section w-100 position-relative">
                            <div className="h-100" id="right-hero-content">
                                <div id="top-to-bottom" className="position-absolute w-100">
                                    <div id="hero-text-right" className="position-relative">
                                        <div className="hero-text hero-text-right-top position-relative">
                                            "I am a web developer who wants to create exciting Projects. "
                                </div>
                                        <div className="hero-text hero-text-right-bottom position-relative">I'd prefer to use React but, Im just as adequate (if not more) with the other technologies I've learned.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
            <Container>
                <div className="resume-section">
                    <SubHead {...AboutTrigger} />
                    <PDFDisplayButton />
                </div>
                <div id="about-me-trigger" className="about-me">

                    <Row>
                        <Col md={{span:4,offset:2 }} id="about-me-left" className=" position-relative">
                            <Image id="personal-img"  fluid={true} src="/images/me.jpg" alt="Simone Anthony" />
                        </Col>
                        <Col md={4} id="about-me-right" className="position-relative">

                            <div id="personal-text-container">
                                <h2>Me</h2>
                                <div>
                                    I am a web developer with 2+ years of experience who enjoys building fun and creative projects.
                                    Web development is my passion and I enjoy writing and building personal projects on my free time.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid={true} className="bg-red-orange">
                <div className="aspiration-section">
                    <SubHead {...AboutTrigger2} />
                    <Row>
                        <Col  className="aspiration-container">
                            <ul className="aspiration-list">
                                <li id="aspiration-list-item-1" className="aspiration-item position-relative">I would like to become a full Stack JavaScript Developer (preferable the MERN stack).</li>
                                <li id="aspiration-list-item-2" className="aspiration-item position-relative">I am currently learning Node.js, Express and  MongoDB. </li>
                                <li id="aspiration-list-item-3" className="aspiration-item position-relative">In the future I would also like to create my own animation Library and put it on github. </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>);
}
export default About;