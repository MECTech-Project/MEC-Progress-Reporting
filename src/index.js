import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editaccount from './Components/Editaccount';
import Changepass from './Components/Changepass';
import Admindashboard from './Components/Admindashboard';
import { Container, Dropdown, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


ReactDOM.render(

  <React.StrictMode>

    <div>
      <br/>
    <Container>
      <Button variant="secondary" href="/Components/Admindashboard">Link</Button> <Button type="button">Button</Button>{' '}
    </Container>

    <Container >
    <br/>
    <Router>

      <Dropdown>    
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Account Settings
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item as={Link} to={"/components/Editaccount"}>Edit Account</Dropdown.Item>
            <Dropdown.Item as={Link} to={"/components/Changepass"}>Change Password</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Routes>
        <Route exact path="/components/admindashboard" element={<Admindashboard/>}/>
        <Route exact path="/components/Editaccount" element={<Editaccount/>}/>
        <Route exact path="/components/Changepass" element={<Changepass/>}/>
      </Routes>
      </Router>

      <br/>
      <hr/>
      <br/>

    </Container>
          
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
