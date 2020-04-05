import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../logo.svg'


export default function NavBar() {
    return (
        <Container fluid className="d-flex mr-0 p-0">
            <Container className="p-0 ml-2 d-flex align-items-center navbar-left">
                {/* <div id="nav-logo">                
                    <img src={logo}/> 
                </div> */}
                <a  className="font-weight-bold" style={{ margin: '0px 0px 0px 5px' }} href={'/'} >dechariot</a>
            </Container>
            <Container className="mr-0 d-flex align-items-center justify-content-end navbar-right">
                <a className="p-3" href={'/projects'}>Projects</a>
                <a p-className="p-3" href={'/about'}>About</a>
            </Container>
        </Container>
    )
}
