import React, { useEffect } from 'react';
import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';

import { workHeroAnimation } from '../js/work/workHeroAnimation';
import { isInViewport } from '../js/isInViewport';
import SubHeadComponent from '../components/SubHeadComponent';
import ProjectCardComponent from '../components/ProjectCardComponent'; 
import ClientCardContainerComponent from '../components/ClientCardContainerComponent';


const Work = () => {

    const heroAnimation = (heroIdent) => {

        if (isInViewport($(heroIdent))) {
            workHeroAnimation();
        }
    }

    const allAnimation = () => {
        heroAnimation('#hero-content');
    }

    const projectTrigger = {
        ident: 'projectTrigger',
        text: 'Projects'

    };
    const workTrigger = {
        ident: 'workTrigger',
        text: 'Previous Clients'

    };
    useEffect(() => {
        allAnimation();
        window.addEventListener('scroll', allAnimation);
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
                                        <div id="work-hero-text">Work 
                                        {/* <span id="scaling-period" className="position-relative">.</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}>
                <SubHeadComponent {...projectTrigger} />
                <Row>
                    <Container className="project-section">
                    <ProjectCardComponent/>
                    </Container>
                </Row>
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