import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




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

                

    function UserDashboard() {
        return (
            <div>
                <center><h2 id="greetings" className="animate__animated animate__zoomIn">{timeOfDay}</h2></center>
                
                <div className="mb-2 plan-report" >
                    <Button as={Link} to="/plan" variant="primary" size="lg">
                    Write Your Plan
                    </Button>{' '}
                
                    <Button as={Link} to="/report" variant="primary" size="lg">
                    Write Your Report
                    </Button>{' '}
                </div>

                {/* Sidebar */}

                <div className="sidebar-container">
                    <div className="sidebar-logo">
                        username
                    </div>
                    <ul className="sidebar-navigation">
                        <li>
                        <a href target="_blank" rel="noreferrer">
                            <i className="fa fa-home" aria-hidden="true"></i> GitHub
                        </a>
                        </li>
                        <li>
                        <a href target="_blank" rel="noreferrer">
                            <i className="fa fa-tachometer" aria-hidden="true"></i> FreeCodeCamp
                        </a>
                        </li>
                        <li>
                        <a href target="_blank" rel="noreferrer">
                            <i className="fa fa-users" aria-hidden="true"></i> TeamTreehouse
                        </a>
                        </li>
                        <li>
                        <a href target="_blank" rel="noreferrer">
                            <i className="fa fa-cog" aria-hidden="true"></i> Tech Typing Club
                        </a>
                        </li>

                        <li>
                        <Button variant="dark" as={Link} to="/change-password">
                            <div className="fa fa-cog" aria-hidden="true"></div> Change Password
                        </Button>
                        </li>

                        <li>
                        <Button variant="dark" as={Link} to="/edit-account">
                            <div className="fa fa-cog" aria-hidden="true"></div> Edit Account
                        </Button>
                        </li>

                    </ul>


                </div>



            </div>
        );
    }

export default UserDashboard;
