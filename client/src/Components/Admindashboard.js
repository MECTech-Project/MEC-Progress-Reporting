import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

import AddUser from './AddUser';
import UsersIcons from './UsersIcons';
import AppRandQuote from './RandQuoteGen/AppRandQuote';
import '../Styles/addUserstyle.css'

function Admindashboard() {

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


    const [showResults, setShowResults] = useState({
        addUser: false,
        UsersIcons: false,
        AppRandQuote: true
    })
    const clickNew = () => setShowResults({
        addUser: true,
        UsersIcons: false,
        AppRandQuote: false
    })
    const clickAll = () => setShowResults({
        addUser: false,
        UsersIcons: true,
        AppRandQuote: false
    })
    console.log("random quote:", showResults.AppRandQuote === true)
    console.log("add user:", showResults.addUser === true)
    console.log("view all users:", showResults.UsersIcons === true)

    return (
        <div>
            <center>
                <h2 id="greetings" className="animate__animated animate__zoomIn">{timeOfDay}</h2>
            </center>
            <br />
            <center>
                <Container>
                    <Button variant="secondary" onClick={clickNew}>add new user</Button> {' '}
                    <Button variant="secondary" onClick={clickAll}>view all users</Button> {' '}
                    <br />
                    <br />
                </Container>
            </center>
                {showResults.addUser ? <AddUser /> : null}
                {showResults.UsersIcons ? <UsersIcons /> : null}
                {showResults.AppRandQuote ? <AppRandQuote /> : null}
        </div>
    )
}
export default Admindashboard;