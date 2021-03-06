import React, { useEffect } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import { isInViewport } from '../js/isInViewport';
import { TweenMax } from "gsap/TweenMax";
import { Container, Row, Col, Card } from 'react-bootstrap';

import skillsArray from '../js/props-objects/skills-props';


const SkillsCardContainer = (props) => {

    let { ident } = props;

    const makeCard = (arrayValue) => {

        const results = _.map(arrayValue, (arrayIndex) => {
            return (
                <Col xs={6} md={3} key={arrayIndex.id}>
                    <Card>
                        <Card.Img variant="top" className="img-fluid w-100" src={arrayIndex.img} alt={arrayIndex.alt} />
                        <Card.Body>
                            <Card.Text className="text-center">{arrayIndex.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        }

        );
        return results;
    }
    const staggerCards = (ident) => {

        //only activates in Viewpoint when parent Id (ident) is correct.
        //It uses css selector syntax to determine which card section  should be selected

        if (isInViewport($(ident))) {
            return TweenMax.staggerTo(ident + ".all-cards  .card", 2, { y: 15, opacity: 1 }, 0.3);
        }
    };

    const theAnimation = () => {
        let identRef = '#' + ident;
        staggerCards(identRef);
    }

    useEffect(() => {
        theAnimation();
        window.addEventListener('scroll', theAnimation);

    });
    return (
        <div id={ident} className="all-cards">
            <Container>
                <Row>
                    {makeCard(skillsArray.skills)}
                </Row>
            </Container>
        </div>
    );
}
export default SkillsCardContainer;