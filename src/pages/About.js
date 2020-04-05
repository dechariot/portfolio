import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Media } from "react-bootstrap";
import avatar from '../avatar.png';
import skill from '../img/skill.svg';
import education from '../img/education.svg';

export default function About() {
    return (
        <Container fluid className="ml-0 mr-0 p-0">
            <NavBar />
            <Container>
                <h1>Hello Universer!</h1>
                <hr />
                <p><b>Sang Nguyen</b> is my name. You can call me <b>dechariot</b>.</p>
                <Media className="pt-4 pb-4">
                    <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={avatar}
                        alt="Generic placeholder"
                        style={{ borderRadius: '50%' }}
                    />
                    <Media.Body className="pl-4" >
                        <h4><b>Short about me</b></h4>
                        <p>
                            Mollit pariatur ex nostrud nostrud consectetur quis labore exercitation ex laboris. Nostrud reprehenderit laboris nisi eiusmod elit aliquip nostrud labore officia qui. Adipisicing aliqua eu ea ea officia enim nisi. Elit sint incididunt velit nulla culpa ex aliqua.
                        </p>
                        <h4 className="pt-3"><b>My Hobbies</b></h4>
                        <p>Mollit pariatur ex nostrud nostrud consectetur quis labore exercitation ex laboris. Nostrud reprehenderit laboris nisi eiusmod elit aliquip nostrud labore officia qui. Adipisicing aliqua eu ea ea officia enim nisi. Elit sint incididunt velit nulla culpa ex aliqua.
                        </p>
                    </Media.Body>
                </Media>
                <hr />
                <Media className="pt-4 pb-4">
                    <Media.Body>
                        <h4><b>Education</b></h4>
                        <p><b>Vo Thi Sau High School</b></p>
                        <p className="text-secondary">2012-2015</p>
                        <p className="text-secondary">Ho Chi Minh City</p>
                        <p className="mr-5">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                        </p>
                    </Media.Body>
                    <img
                        width={200}
                        height={200}
                        src={education}
                        alt="Generic placeholder"
                    />
                </Media>

                <hr />
                <Media>
                    <Media.Body>
                        <h4 className="pt-4 pb-4"><b>Work Experiences</b></h4>
                        <p className="mr-5"><b>Dai Quy Phat Ceramics Trading Services Company Limited</b></p>
                        <p className="mr-5">Marketing Assistant - Full time</p>
                        <p className="text-secondary">June 2016 - Present</p>
                        <p className="text-secondary">Tan Uyen, Binh Duong, Vietnam</p>
                        <p className="mr-5">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                        </p>

                        <br></br>
                        <p className="mr-5"><b>The Max English Center</b></p>
                        <p className="mr-5">Marketing Assistant - Part time</p>
                        <p className="text-secondary">Sep 2018 - Jul 2019</p>
                        <p className="text-secondary">Ho Chi Minh, Vietnam</p>
                        <p className="mr-5">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                        </p>
                    </Media.Body>
                    <img
                        width={200}
                        height={200}
                        src={`https://img.icons8.com/material-two-tone/1000/000000/briefcase.png`}
                        alt="Generic placeholder"
                    />
                </Media>
                <hr></hr>
                <Media>
                    <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={skill}
                        alt="Generic placeholder"
                        style={{ borderRadius: '50%' }}
                    />
                    <Media.Body className="pl-4 pt-4 pb-4" >
                        <h4><b>My Skill</b></h4>
                        <p><b>HTML, CSS, JavaScript, Bootstrap</b></p>
                        <p>Nulla veniam ipsum est sunt aute proident dolore ad cupidatat. Cupidatat ut exercitation incididunt laborum consectetur elit eiusmod anim ex aliquip. Culpa fugiat culpa labore sit laboris ea laborum duis qui culpa.
                        <hr></hr>
                        <p><b>React JS, Redux, NPM</b></p>
                        Qui pariatur sint cupidatat cupidatat duis incididunt tempor officia duis. Commodo reprehenderit amet occaecat deserunt labore laborum ipsum velit. Tempor quis mollit ipsum Lorem quis reprehenderit. Sint amet
                        Velit reprehenderit dolore incididunt cupidatat nisi dolore consectetur. Laboris nisi sit in Lorem est ea exercitation proident cillum mollit cillum elit. Sint minim amet incididunt elit. Mollit ex dolore exercitation magna cillum anim nostrud est irure. Amet dolore excepteur amet id sunt occaecat officia aliqua cillum ex commodo est id. Ea in ipsum sint do id tempor. Labore minim anim nisi labore ipsum nostrud.</p>
                    </Media.Body>
                </Media>
                <hr></hr>

                <Media>
                    <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={`https://img.icons8.com/ios/5000/000000/new-contact.png`}
                        alt="Generic placeholder"
                    />
                    <Media.Body className="pl-4 pt-4 pb-4" >
                        <h4><b>Happy to Contact to You</b></h4>
                        <ul style={{listStyleType:'none'}}>
                            <li><label><b>Phone: </b></label><a> (+84) 97 407 0167</a></li>
                            <li><label><b>Email: </b></label><a> nsprisang@gmail.com</a></li>
                            <li><label><b>Telegram/Zalo: </b></label><a> (+84) 97 407 0167</a></li>
                        </ul>
                    </Media.Body>
                </Media>

            </Container>
            <Footer />
        </Container>
    )
}
