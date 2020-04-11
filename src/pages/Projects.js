import React from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import rmovie from '../img/rmovie.png';
import pinkter from '../img/pinkter.png';



export default function Projects() {
    return (
        <Container fluid className="mr-0 p-0" id="myprojects">
            {/* <NavBar /> */}
            <Container>

                <Row>

                    <Col className="col-md-4 col-sm-12 pt-4">
                        <h1>These are my projects</h1>
                        <p>
                            That's my story about my first step to start developer career. I had a great chance to experience 6 weeks with Front End in CoderSchool. Each weeks with each projects they gave me those gave me a lot of skill and knowledge. I used them much to applied my own projects. There are my favorite projects are "Review movie" and "Pinkter" (Twitter Clone) . They helped me learn much about fetch API and using some methods of array and object as well. That was challenges when I worked with my the projects with my partner. Although we struggled about the methods of array but we kick them already.
                    </p>
                    </Col>

                    {/* Project Gallery */}
                    <Col className="col-md-8 col-sm-12">

                        <Row className="pt-4">

                            {/* <Col className="col-md-4 col-ms-12 d-flex justify-content-center pt-4 pb-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.koreaboo.com%2Fwp-content%2Fuploads%2F2017%2F07%2FPicMonkey-Collage-5.jpg&f=1&nofb=1`} />
                                    <Card.Body>
                                        <Card.Title>Website Demo</Card.Title>
                                        <Card.Text>
                                            Et proident aliqua amet commodo do ad sint ad enim excepteur aliquip dolor officia incididunt. Pariatur amet tempor ad minim mollit nisi amet. Minim velit aliquip sint adipisicing excepteur aliqua pariatur amet.</Card.Text>
                                        <Container className="d-flex justify-content-between align-items-center p-0 pt-4">
                                            <Button variant="outline-dark">
                                                <FontAwesomeIcon icon={faGithub} target={'_blank'} rel={'noopener'} size={'1x'}></FontAwesomeIcon><span><a href="https://google.com"> Github</a></span></Button>
                                            <Button variant="outline-dark" type="button">
                                                <FontAwesomeIcon icon={faLaptop} target={'_blank'} rel={'noopener'} size={'1x'}></FontAwesomeIcon>
                                                <span> <a href="https://google.com"> Project </a></span></Button>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col> */}

                            {/* <Col className="col-md-4 col-ms-12 d-flex justify-content-center pt-4 pb-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.koreaboo.com%2Fwp-content%2Fuploads%2F2017%2F07%2FPicMonkey-Collage-5.jpg&f=1&nofb=1`} />
                                    <Card.Body>
                                        <Card.Title>Website Demo</Card.Title>
                                        <Card.Text>
                                            Et proident aliqua amet commodo do ad sint ad enim excepteur aliquip dolor officia incididunt. Pariatur amet tempor ad minim mollit nisi amet. Minim velit aliquip sint adipisicing excepteur aliqua pariatur amet.</Card.Text>
                                        <Container className="d-flex justify-content-between align-items-center p-0 pt-4">
                                            <Button variant="outline-dark">
                                                <FontAwesomeIcon icon={faGithub} target={'_blank'} rel={'noopener'} size={'1x'}></FontAwesomeIcon><span><a href="https://google.com"> Github</a></span></Button>
                                            <Button variant="outline-dark" type="button">
                                                <FontAwesomeIcon icon={faLaptop} target={'_blank'} rel={'noopener'} size={'1x'}></FontAwesomeIcon>
                                                <span> <a href="https://google.com"> Project </a></span></Button>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col> */}

                            <Col className="col-md-6 col-ms-12 d-flex justify-content-center pt-4 pb-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={rmovie} />
                                    <Card.Body>
                                        <Card.Title>Review Moive</Card.Title>
                                        <Card.Text>
                                            Et proident aliqua amet commodo do ad sint ad enim excepteur aliquip dolor officia incididunt. Pariatur amet tempor ad minim mollit nisi amet. Minim velit aliquip sint adipisicing excepteur aliqua pariatur amet.</Card.Text>
                                        <Container className="d-flex justify-content-between align-items-center p-0 pt-4">
                                            <Button variant="outline-dark">
                                                <FontAwesomeIcon icon={faGithub} target={'_blank'} rel={'noopener'} size={'1x'}></FontAwesomeIcon><span><a className="project-links" href="https://github.com/dechariot/Review-Movies"> Github</a></span></Button>
                                            <Button variant="outline-dark" type="button">
                                                <FontAwesomeIcon icon={faLaptop} target={'_blank'} rel={'noopener'} size={'1x'}></FontAwesomeIcon>
                                                <span> <a className="project-links" href="https://dechariot-reviewmovies.netlify.com/"> Project </a></span></Button>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="col-md-6 col-ms-12 d-flex justify-content-center pt-4 pb-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={pinkter} />
                                    <Card.Body>
                                        <Card.Title>Pinkter (Twitter Clone)</Card.Title>
                                        <Card.Text>
                                            Et proident aliqua amet commodo do ad sint ad enim excepteur aliquip dolor officia incididunt. Pariatur amet tempor ad minim mollit nisi amet. Minim velit aliquip sint adipisicing excepteur aliqua pariatur amet.</Card.Text>
                                        <Container className="d-flex justify-content-between align-items-center p-0 pt-4">
                                            <Button variant="outline-dark">
                                                <FontAwesomeIcon icon={faGithub} target={'_blank'} rel={'noopener'} size={'1x'}></FontAwesomeIcon><span><a className="project-links" href="https://github.com/dechariot/twitter-clone"> Github</a></span></Button>
                                            <Button variant="outline-dark" type="button">
                                                <FontAwesomeIcon icon={faLaptop} target={'_blank'} rel={'noopener'} size={'1x'}></FontAwesomeIcon>
                                                <span> <a className="project-links" href="https://pinkteres.netlify.com/"> Project </a></span></Button>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                    {/* Project Gallery */}

                </Row>

            </Container>
            {/* <Footer /> */}
        </Container>
    )
}
