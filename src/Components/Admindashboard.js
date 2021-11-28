import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Navbar } from 'react-bootstrap';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
    timeOfDay = "Good Morning, Adam"
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
                    <Button variant="primary" as={Link} to='signin' className="log-out">Log Out</Button>
                </Container>
            </Navbar>

            <br/>

            <center>
                <h2 id="greetings" className="animate__animated animate__zoomIn">{timeOfDay}</h2>
            </center>

            <br/>
            
            <center>
                <Container>
                    <Button variant="secondary" as={Link} to="/add-user">add new user</Button> {' '}
                    <Button variant="secondary" as={Link} to="/all-users">view all users</Button> {' '}
                </Container>
            </center>



        </div>
    )
}

export default Admindashboard;