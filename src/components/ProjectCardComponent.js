import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
// import ProjectArray from '../js/props-objects/project-props';
// import _ from 'lodash';

const ProjectCardComponent = () => {

    // const makeCard = (arrayValue) => {
    //     const results = _.map(arrayValue, arrayIndex => {


    //         let cardValue =
    //             <Col md={4} key={arrayIndex.id}>
    //                 <Card>
    //                     <Card.Img variant="top" src={arrayIndex.img} />
    //                     <Card.Body>
    //                         <Card.Title>{arrayIndex.title}</Card.Title>
    //                         <Card.Text>
    //                             {arrayIndex.description}
    //                         </Card.Text>
    //                         <Button className="viewButton">View Here</Button>
    //                         <Button variant="secondary">View on GitHub</Button>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>


    //         return (cardValue);
    //     });
    //     return results;
    // }
    return (
        <div>
            <Row>
                {/* {makeCard(ProjectArray)} */}
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/images/projects/DGWesternUnion.png" alt="Dollar General Western Union" />
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
                    <Card>
                        <Card.Img variant="top" src="/images/projects/searshometownstores2.png" alt="Sears Landing PHP Template" />
                        <Card.Body>
                            <Card.Title>Sears Landing PHP Template</Card.Title>
                            <Card.Text>
                                This is a PHP template built for creating landing pages quickly.
                            </Card.Text>
                            <a href="http://sb6.hometown.kili.netsuitestaging.com/how-to-clean-your-oven" target="_blank" rel="noopener noreferrer"  className="mr-3">
                                <Button className="viewButton">View Here</Button>
                            </a>
                            <a href="https://github.com/simone188535/sears_repo" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary">View on GitHub</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/images/projects/caymus-equity.png" alt="Caymus Equity" />
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
            <Row className="my-5">
            <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/images/projects/KFEmail.png" alt="Email Template" />
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
                    <Card>
                        <Card.Img variant="top" src="/images/projects/DGApp.png" alt="Dollar General App Page" />
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
                    <Card>
                        <Card.Img variant="top" src="/images/projects/todo.png" alt="Simple React Todo List" />
                        <Card.Body>
                            <Card.Title>Simple React Todo List</Card.Title>
                            <Card.Text>
                            This is an application that uses React and Redux.
                            </Card.Text>
                            
                            <a href="https://github.com/simone188535/react-todo-list" target="_blank" rel="noopener noreferrer">
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