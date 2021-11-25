import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Navbar } from 'react-bootstrap';
import logo from './logo.jpg';

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
    timeOfDay = "Good Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Good Afternoon, Adam"
    } else {
        timeOfDay = "Good Evening, Adam"
    }

function Admindashboard() {
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
                    <Button variant="primary" className="log-out">Log Out</Button>
                </Container>
            </Navbar>

            <center>
                <h2 id="greetings" className="animate__animated animate__zoomIn">{timeOfDay}</h2>
            </center>

            <center>
                <Container>
                    <Button variant="secondary" href="/Components/Testaddnew">add new user</Button> {' '}
                    <Button variant="secondary" href="/Components/Testviewall">view all users</Button> {' '}
                </Container>
            </center>



        </div>
    )
}

export default Admindashboard;