import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import AppRandQuote from './RandQuoteGen/AppRandQuote';
import ReportPage from './ReportPage';
import UserPlan from './UserPlan';
import Changepass from './Changepass';
import EditAccount from './Editaccount';


    function UserDashboard() {

        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
        timeOfDay = "Good Morning, user"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "Good Afternoon, user"
        } else {
            timeOfDay = "Good Evening, user"
        }

        const [showResults, setShowResults] = useState({
            WritePlan: false,
            WriteReport: false,
            ChangePass: false,
            EditAccount: false,
            AppRandQuote: true
        })
        const clickPlan = () => setShowResults({
            WritePlan: true,
            WriteReport: false,
            ChangePass: false,
            EditAccount: false,
            AppRandQuote: false
        })
        const clickReport = () => setShowResults({
            WritePlan: false,
            WriteReport: true,
            ChangePass: false,
            EditAccount: false,
            AppRandQuote: false
        })
        const clickPass = () => setShowResults({
            WritePlan: false,
            WriteReport: false,
            ChangePass: true,
            EditAccount: false,
            AppRandQuote: false
        })
        const clickAccount = () => setShowResults({
            WritePlan: false,
            WriteReport: false,
            ChangePass: false,
            EditAccount: true,
            AppRandQuote: false
        })
        console.log("random quote:", showResults.AppRandQuote === true)
        console.log("WritePlan:", showResults.WritePlan === true)
        console.log("WriteReport:", showResults.WriteReport === true)
        console.log("WriteReport:", showResults.ChangePass === true)
        console.log("WriteReport:", showResults.EditAccount === true)



        return (
            <div>
                <center>
                    <h2 id="greetings" className="animate__animated animate__zoomIn">{timeOfDay}</h2>
                </center>
                <br />
                <center>
                    <Container>
                        <Button variant="secondary" onClick={clickPlan}>add new user</Button> {' '}
                        <Button variant="secondary" onClick={clickReport}>view all users</Button> {' '}
                        <br />
                        <br />
                    </Container>
                </center>
                {showResults.WritePlan ? <UserPlan /> : null}
                {showResults.WriteReport ? <ReportPage /> : null}
                {showResults.AppRandQuote ? <AppRandQuote /> : null}
                {showResults.ChangePass ? <Changepass /> : null}
                {showResults.EditAccount ? <EditAccount /> : null}



            {/* Sidebar */}
            
                <div className="sidebar-container">
                    <div className="sidebar-logo">
                        username
                    </div>
                    <ul className="sidebar-navigation">
                        <li>
                        <Button href target="_blank" rel="noreferrer">
                            <i className="fa fa-home" aria-hidden="true"></i> GitHub
                        </Button>
                        </li>
                        <li>
                        <Button href target="_blank" rel="noreferrer">
                            <i className="fa fa-tachometer" aria-hidden="true"></i> FreeCodeCamp
                        </Button>
                        </li>
                        <li>
                        <Button href target="_blank" rel="noreferrer">
                            <i className="fa fa-users" aria-hidden="true"></i> TeamTreehouse
                        </Button>
                        </li>
                        <li>
                        <Button href target="_blank" rel="noreferrer">
                            <i className="fa fa-cog" aria-hidden="true"></i> Tech Typing Club
                        </Button>
                        </li>

                        <li>
                        <Button onClick={clickPass}>
                            <i className="fa fa-tachometer" aria-hidden="true"></i> Change Password
                        </Button>
                        </li>

                        <li>
                        <Button onClick={clickAccount}>
                            <i className="fa fa-tachometer" aria-hidden="true"></i> Edit Account
                        </Button>
                        </li>

                    </ul>


                </div>



            </div>
        );
    }

export default UserDashboard;
