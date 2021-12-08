import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

function NavBar() {

    const [hide, setHide] = useState({
        logButton: true
    })
    const hideLog = () => setHide({
        logButton: false
    })
    console.log("log button:", hide.logButton === true )

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
                {hide.logButton ? <Button variant="primary" onClick={hideLog} as={Link} to='/login'
                        className="log-out">Log Out</Button> : null}
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;