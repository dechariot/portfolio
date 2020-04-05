import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

export default function Projects() {
    return (
        <Container fluid className="mr-0 p-0">
        <NavBar/>
        <div>
            These are my projects
        </div>
        <Footer/> 
        </Container>
    )
}
