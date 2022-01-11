import React from "react";
import { Nav, Offcanvas, Container, Navbar } from 'react-bootstrap';


function OffCanvas() {
    return (
                            <Navbar className="col-md-5" bg="light" expand={false}>
                                <Container fluid>
                                    <Navbar.Brand href="#">More about (user)</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                                    <Navbar.Offcanvas
                                        id="offcanvasNavbar"
                                        aria-labelledby="offcanvasNavbarLabel"
                                        placement="end">
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id="offcanvasNavbarLabel">(User) Accounts</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                                <Nav.Link href="https://github.com/" target="_blank" rel="noreferrer">GitHub</Nav.Link>
                                                <Nav.Link href="https://teamtreehouse.com/" target="_blank" rel="noreferrer">TeamTreehouse</Nav.Link>
                                                <Nav.Link href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">FreeCodeCamp</Nav.Link>
                                                <Nav.Link href="https://mec-tech.typingclub.com/" target="_blank" rel="noreferrer">TechTypingClub</Nav.Link>
                                            </Nav>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
    );
}

export default OffCanvas;