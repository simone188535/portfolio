import React, { useEffect } from 'react';
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import { TweenMax } from "gsap/TweenMax";
import { Container, Row, Col } from 'react-bootstrap';





const Contact = () => {

    const contactHeroAnimation = (heroIdent) => {
        if(isInViewport($(heroIdent))){
            TweenMax.to($('#hero-text'), 1, { x: 30, opacity: 1 });
        }
    }
    const allAnimation = () => {
        contactHeroAnimation('#left-hero-container');

    }
    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);

    });

    return (
        <div className="contact">
            <Container fluid={true}>
                <Row>
                    <Col md={6} id="left-hero-container" className="vh-100 bg-pale-peach left-section">
                        <div id="hero-text" className="position-relative left-text-container">Contact Me Anytime.</div>
                    </Col>
                    <Col md={6} className="vh-100 bg-soft-black right-section">
                        <div className="position-relative right-text-container">
                            <Row className="all-details">
                                <Col xs={12} className="half">
                                    <Col xs={6} className="float-left details">
                                        <div className="detail-title">Phone</div>
                                        <div className="detail-description">
                                            (404)-397-9523
                                        </div>
                                    </Col>
                                    <Col xs={6} className="float-left details">
                                        <div className="detail-title">Email</div>
                                        <div className="detail-description">
                                            simone.anthony1@yahoo.com
                                        </div>
                                    </Col>
                                </Col>
                                <Col className="half">
                                    <Col xs={12} className="float-left details">
                                        <div className="detail-title">City</div>
                                        <div className="detail-description">
                                            Stone Mountain, Georgia
                                        </div>
                                    </Col>
                                    <Col xs={6} className="float-left details">
                                        <div className="detail-title">Follow</div>
                                        <div className="detail-description">
                                            <a href="https://www.linkedin.com/in/simone-anthony-059066136/" target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-linkedin-square"></i>
                                            </a>
                                        </div>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;