import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
// import ProjectArray from '../js/props-objects/project-props';
// import _ from 'lodash';

const ProjectCardComponent = () => {

    return (
        <div>
            <Row className="mt-5">
                <Col md={4}>
                    <Card className="mb-5 mb-md-0">
                        <Card.Img variant="top" className="img-fluid" src="/images/projects/DGWesternUnion.png" alt="Dollar General Western Union" />
                        <Card.Body>
                            <Card.Title>Dollar General Western Union</Card.Title>
                            <Card.Text>
                                This is a landing built with HTML, CSS, JQuery and Bootstrap3.
                            </Card.Text>
                            
                            <a href="https://www.dollargeneral.com/westernunion" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <Button className="viewButton">View Here</Button>
                            </a>
                            <a href="https://github.com/simone188535/dollar-general-western-union" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary">View on GitHub</Button>
                            </a>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-5 mb-md-0">
                        <Card.Img variant="top" className="img-fluid" src="/images/projects/searshometownstores2.png" alt="Sears Landing PHP Template" />
                        <Card.Body>
                            <Card.Title>Sears Landing PHP Template</Card.Title>
                            <Card.Text>
                                This is a PHP template built for creating landing pages quickly.
                            </Card.Text>
                            <a href="http://www.searshometownstores.com/buying-guide-riding-mower" target="_blank" rel="noopener noreferrer"  className="mr-3">
                                <Button className="viewButton">View Here</Button>
                            </a>
                            <a href="https://github.com/simone188535/sears_repo" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary">View on GitHub</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-5 mb-md-0">
                        <Card.Img variant="top" className="img-fluid" src="/images/projects/caymus-equity.png" alt="Caymus Equity" />
                        <Card.Body>
                            <Card.Title>Caymus Equity</Card.Title>
                            <Card.Text>
                                This is a Wordpress site using HTML, CSS, Javascript, JQuery, PHP and MYSQL.
                            </Card.Text>
                            <a href="http://caymusequity.com/" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <Button className="viewButton">View Here</Button>
                            </a>
                            <a href="https://github.com/simone188535/caymus-repo" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary">View on GitHub</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-md-5">
            <Col md={4}>
                    <Card className="mb-5 mb-md-0">
                        <Card.Img variant="top" className="img-fluid" src="/images/projects/KFEmail.png" alt="Email Template" />
                        <Card.Body>
                            <Card.Title>Email Template</Card.Title>
                            <Card.Text>
                            Responsive Email Template built in Ruby that I helped modify and maintain.
                            </Card.Text>
                            {/* <a href="http://caymusequity.com/" target="_blank" rel="noopener noreferrer">
                                <Button className="viewButton">View Here</Button>
                            </a> */}
                            <a href="https://github.com/simone188535/email_template" target="_blank" rel="noopener noreferrer"  className="mr-3">
                                <Button variant="secondary">View on GitHub</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-5 mb-md-0">
                        <Card.Img variant="top" className="img-fluid" src="/images/projects/DGApp.png" alt="Dollar General App Page" />
                        <Card.Body>
                            <Card.Title>Dollar General App Page</Card.Title>
                            <Card.Text>
                            This is Dollar General Landing Page built with HTML and CSS.
                            </Card.Text>
                            <a href="https://www.dollargeneral.com/app.html" target="_blank" rel="noopener noreferrer"  className="mr-3">
                                <Button className="viewButton">View Here</Button>
                            </a>
                            <a href="https://github.com/simone188535/dollar-general-app" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary">View on GitHub</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-5 mb-md-0">
                        <Card.Img variant="top" className="img-fluid" src="/images/projects/todo.png" alt="Simple React Todo List" />
                        <Card.Body>
                            <Card.Title>React Todo List</Card.Title>
                            <Card.Text>
                            This is an application that demonstrates my ability to uses React and Redux.
                            </Card.Text>
                            
                            <a href="https://github.com/simone188535/react-todo-list" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary">View on GitHub</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-md-5">
            <Col md={4} className="offset-md-4">
                    <Card className="mb-5 mb-md-0">
                        <Card.Img variant="top" className="img-fluid" src="/images/projects/pokedex.png" alt="Simple React Todo List" />
                        <Card.Body>
                            <Card.Title>Pokedex</Card.Title>
                            <Card.Text>
                            This is a pokedex built using React and Redux. It pulls data using axios, and displays it.
                            </Card.Text>
                            
                            <a href="https://github.com/simone188535/pokedex" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary">View on GitHub</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProjectCardComponent;