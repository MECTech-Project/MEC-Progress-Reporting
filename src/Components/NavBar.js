import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                    <img
                        alt="app logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top, img-circle"
                    />{' '}
                  MEC Reporting
                </Navbar.Brand>
                    <Button variant="primary" as={Link} to='/login' className="log-out">Log Out</Button>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;