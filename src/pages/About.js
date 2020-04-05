import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container } from "react-bootstrap";

export default function About() {
    return (
        <Container fluid className="ml-0 mr-0 p-0">
        <NavBar/>
        <div>
            This is About
        </div>
        <Footer/> 
        </Container>
    )
}
