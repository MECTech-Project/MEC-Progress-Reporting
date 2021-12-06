import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

import AddUser from './AddUser';
import UsersIcons from './UsersIcons';
import AppRandQuote from './RandQuoteGen/AppRandQuote';
import { render, cleanup } from '@testing-library/react';

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

function clickNew(){
    cleanup (<UsersIcons/>);
    render (<AddUser/>)
}

function clickAll() {
    cleanup (<AddUser/>);
    render (<UsersIcons/>)
}
    
function Admindashboard() {
    return (
        <div>
            <center>
                <h2 id="greetings" className="animate__animated animate__zoomIn">{timeOfDay}</h2>
            </center>
            <br/>
            <center>
                <Container>
                    <Button variant="secondary" onClick={clickNew}>add new user</Button> {' '}
                    <Button variant="secondary" onClick={clickAll}>view all users</Button> {' '}
                </Container>
            </center>
            <br/>
            <br/>
            <AppRandQuote />
        </div>
    )
}

export default Admindashboard;