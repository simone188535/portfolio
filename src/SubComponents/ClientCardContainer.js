import React from 'react';
import _ from 'lodash';
import { Container, Row, Col, Image } from 'react-bootstrap';

import clientsArray from '../js/props-objects/client-props';

const CardContainer = (props) => {
    const makeCard = (arrayValue) => {

        const results = _.map(arrayValue, (arrayIndex) => {
            return (


                <Col xs={6} md={3} key={arrayIndex.id}>
                    <a href={arrayIndex.link} target="_blank" rel="noopener noreferrer">
                        <div className="client-card">
                            <Image fluid={true} src={arrayIndex.img} alt={arrayIndex.alt} />
                        </div>
                    </a>
                </Col>

            )
        }

        );
        return results;
    }

    return (
        <div id={props.ident} className="all-cards">
            <Container className="client-card-container">
                <Row>
                    {makeCard(clientsArray.clients)}
                </Row>
            </Container>

        </div>);
}
export default CardContainer;