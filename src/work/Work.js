import React, { useEffect } from 'react';
import { TimelineLite } from "gsap/TweenMax";
import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';

import { isInViewport } from '../js/isInViewport';
import SubHeadComponent from '../components/SubHeadComponent';
import ClientCardContainerComponent from '../components/ClientCardContainerComponent';


const Work = () => {

    const heroAnimation = (heroIdent) => {

        if (isInViewport($(heroIdent))) {
            const tl = new TimelineLite();
            tl.to($('#work-hero-text'), 1, {
                opacity: 1,
                y: -20
            })
                .to($('#scaling-period'), .5, {
                    opacity: 1
                });
        }
    }

    const allAnimation = () => {
        heroAnimation('#hero-content');
    }

    const workTrigger = {
        ident: 'workTrigger',
        text: 'Previous Clients'

    };
    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);
        // console.log('active');

    });

    return (
        <div className="work">
            <Container fluid={true}>
                <Row>
                    <Col className="bg-red-orange">
                        <div className="hero-section w-100">
                            <div className="h-100" id="hero-content">
                                <div className="hero-text position-relative h-100">
                                    <div className="hero-text-container position-relative">
                                        <div id="work-hero-text">Work <span id="scaling-period" className="position-relative">.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}>
                <SubHeadComponent {...workTrigger} />
                <Row>
                    <Container>
                        <ClientCardContainerComponent ident="work-card-container" />
                    </Container>
                </Row>
            </Container>
        </div>
    );
}

export default Work;