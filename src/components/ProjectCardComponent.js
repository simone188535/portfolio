import React from 'react';
import { Row,Col, Card, Button } from 'react-bootstrap';
import ProjectArray from '../js/props-objects/project-props';
import _ from 'lodash';

const ProjectCardComponent = () => {

    const makeCard = (arrayValue) => {
        const results = _.map(arrayValue, arrayIndex => {
            return (
                <Col md={4} key={arrayIndex.id}>
                    <Card>
                        <Card.Img variant="top" src={arrayIndex.img} />
                        <Card.Body>
                            <Card.Title>{arrayIndex.title}</Card.Title>
                            <Card.Text>
                                {arrayIndex.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
        return results;
    }
    return (
        <Row>
       {makeCard(ProjectArray)}
        </Row>
    );
}

export default ProjectCardComponent;