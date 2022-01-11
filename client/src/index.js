import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from './Components/SignIn';
import NavBar from './Components/NavBar';
import Admindashboard from './Components/Admindashboard';
import UserDashboard from './Components/UserDashboard';
import './Styles/UserDashboard.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/admin" element={<Admindashboard/>}/>
          <Route path="/user" element={<UserDashboard/>}/>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
