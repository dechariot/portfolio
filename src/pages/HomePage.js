import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar from '../avatar.png';


export default function HomePage() {
    return (
        <Container fluid className="ml-0 mr-0 p-0">
            <NavBar />
            <Container className="intro d-flex flex-column align-items-center">
                <img src={avatar} className="avatar" />
                <Container className="nickname"><a href="/About">Nguyen Sang</a></Container>
                <Container className="description">Ea reprehenderit cupidatat fugiat non incididunt tempor officia. Mollit cupidatat anim exercitation aliqua aute ipsum id esse tempor sit. Sunt duis nisi incididunt velit officia exercitation tempor sunt id et anim. Sint aute cillum voluptate labore ipsum incididunt magna quis. Et irure minim incididunt ut voluptate reprehenderit est mollit nostrud.</Container>
                <Container className="links d-flex justify-content-center">
                    <a className="link-item" title="Blog" href="#">
                    <FontAwesomeIcon icon={faEdit} size={'2x'}></FontAwesomeIcon>
                    </a>
                    <a className="link-item" title="Blog" href="https://github.com/dechariot">
                    <FontAwesomeIcon icon={faGithub} target={'_blank'} rel={'noopener'}  size={'2x'}></FontAwesomeIcon>
                    </a>             
                </Container>
            </Container>
            <Footer />
        </Container>
    )
}
