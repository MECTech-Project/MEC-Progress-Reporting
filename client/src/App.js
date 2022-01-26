import React, { useState } from 'react';
import './App.css';
import './Styles/UserDashboard.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './Components/NavBar';
import LogIn from './Components/LogIn';
import Admindashboard from './Components/Admindashboard';
import UserDashboard from './Components/UserDashboard';

// import { LoginContext, UserTypeContext } from './Helper/Context';

function App() {
    // const [loggedIn, setLoggedIn] = useState(false)
    // const [userType, setUserType] = useState("")

    return (
        <div>
        {/* <LoginContext.Provider value={{ loggedIn, setLoggedIn }}> */}
            <Router>
                <NavBar />

                <Routes>
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/admin" element={<Admindashboard />} />
                    <Route path="/user" element={<UserDashboard />} />
                </Routes>
            </Router>
        {/* </LoginContext.Provider> */}
        </div>
    );
};

export default App;