import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Projects() {
    return (
        <Container fluid className="mr-0 p-0">
            <NavBar />
            <Container fluid>

                <Row>

                    <Col className="col-md-4 col-sm-12 pt-4">
                        <h1>These are my projects</h1>
                        <p>
                            Tempor voluptate irure mollit aliqua non ad. Deserunt consectetur amet id tempor dolor tempor quis ut exercitation veniam culpa dolor eiusmod. Sunt laborum sint id sunt in enim non reprehenderit irure ullamco ea consectetur magna.

                            Laboris et exercitation dolor ut anim velit eiusmod excepteur magna occaecat velit do. Magna dolor sint labore mollit dolor incididunt nisi laboris exercitation officia duis. Fugiat amet aliqua aliqua ex quis nostrud ea officia ullamco eiusmod eu et do aliqua. Amet ut pariatur elit ex ea sint reprehenderit qui nostrud. Eu veniam et culpa officia aliqua quis.

                            Ad voluptate in consequat consequat irure adipisicing pariatur fugiat do. Anim pariatur irure cillum magna incididunt anim pariatur cupidatat dolore magna. In laboris ullamco dolore quis in do commodo veniam sunt.

                            Esse nostrud minim dolor ea qui amet ea consectetur commodo tempor labore tempor et voluptate. Velit elit duis anim culpa proident dolore nulla do ea dolore laborum. Proident est laborum quis elit fugiat sint sit ea. Proident aliquip ipsum dolore anim sit elit pariatur. Veniam sint et nulla consectetur excepteur velit irure Lorem. Dolore cupidatat ex deserunt est. Sit laboris mollit est nisi dolore proident ex aliquip laboris.
                    </p>
                    </Col>

                    {/* Project Gallery */}
                    <Col className="col-md-8 col-sm-12">

                        <Row className="pt-4">

                            <Col className="col-md-4 col-ms-12 d-flex justify-content-center pt-4 pb-4">
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
                            </Col>

                            <Col className="col-md-4 col-ms-12 d-flex justify-content-center pt-4 pb-4">
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
                            </Col>

                            <Col className="col-md-4 col-ms-12 d-flex justify-content-center pt-4 pb-4">
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
                            </Col>

                            <Col className="col-md-4 col-ms-12 d-flex justify-content-center pt-4 pb-4">
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
                            </Col>
                        </Row>

                    </Col>
                    {/* Project Gallery */}

                </Row>

            </Container>
            <Footer />
        </Container>
    )
}
