import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admindashboard from './Components/Admindashboard';
import Testaddnew from './Components/Testaddnew';
import Testviewall from './Components/Testviewall';
import Editaccount from './Components/Editaccount';
import Changepass from './Components/Changepass';
import Accountsettings from './Components/Accountsettings';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(

  <React.StrictMode>

    <div>
      
      <Admindashboard />
      
      <br/>
      <hr/>
      <br/>

      <Accountsettings />

    <Router>
        <Routes>
            <Route exact path="/Components/Admindashboard" element={<Admindashboard/>}/>
            <Route exact path="/Components/Editaccount" element={<Editaccount/>}/>
            <Route exact path="/Components/Changepass" element={<Changepass/>}/>
            <Route exact path="/Components/Testaddnew" element={<Testaddnew/>}/>
            <Route exact path="/Components/Testviewall" element={<Testviewall/>}/>
            <Route exact path="/Components/Accountsettings" element={<Accountsettings/>}/>
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
