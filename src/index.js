import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// import AddUser from './Components/AddUser';
import ReportPage from './Components/ReportPage';
import './Styles/addUserstyle.css';

import Editaccount from './Components/Editaccount';
import Changepass from './Components/Changepass';
import Admindashboard from './Components/Admindashboard';
import { Container, Dropdown, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

{/*}>>>>>>> 4bc6c8bdf7f0445c39c4de480e810fa09189f803*/}

ReactDOM.render(

  <React.StrictMode>

    {/* <AddUser /> */}
    <ReportPage />


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

{/* >>>>>>> 4bc6c8bdf7f0445c39c4de480e810fa09189f803 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
