import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Welcome Page
import SignIn from './Components/SignIn';

// for the admin dashboard 
import Admindashboard from './Components/Admindashboard';
import AddUser from './Components/AddUser';
import './Styles/addUserstyle.css';
import UsersList from './Components/users';
import UsersIcons from './Components/UsersIcons';

// for the user dashboard
import Accountsettings from './Components/Accountsettings';
import Editaccount from './Components/Editaccount';
import Changepass from './Components/Changepass';
import WorkTime from './Components/WorkTime';
import UserPlan from './Components/UserPlan';
import ReportPage from './Components/ReportPage';

// Random Quote Generator
// import * as serviceWorker from './serviceWorker';
import AppRandQuote from './Components/RandQuoteGen/AppRandQuote';
import QuoteAndAuthor from './Components/RandQuoteGen/QuoteAndAuthor';
// import Quotes from './Components/RandQuoteGen/QuoteDB';

ReactDOM.render(

  <React.StrictMode>
    <div>
    <Router>

    <Admindashboard/>
    
    <br/>
    <br/>

    <AppRandQuote />

    {/* <Accountsettings/> */}

        <Routes>
            {/* Welcome Page */}
            <Route path="/signin" element={<SignIn/>}/>

            {/* for the admin dashboard */}
            <Route path="/admin-dashboard" element={<Admindashboard/>}/>
            <Route path="/add-user" element={<AddUser/>}/>
            <Route path="/account-settings" element={<Accountsettings/>}/>
            <Route path="/edit-account" element={<Editaccount/>}/>
            <Route path="/change-password" element={<Changepass/>}/>

            {/* for the user dashboard */}
            <Route path="/ReportPage" element={<ReportPage/>}/>
            <Route path="/user-plan" element={<UserPlan/>}/>
            <Route path="/users-list" element={<UsersList/>}/>
            <Route path="/all-users" element={<UsersIcons/>}/>
            <Route path="/work-time" element={<WorkTime/>}/>

            {/* Random Quote Generator */}
            <Route path="/app-rand-quote" element={<AppRandQuote/>}/>
            <Route path="/quote-and-author" element={<QuoteAndAuthor/>}/>
            {/* <Route path="/quotes" element={<Quotes/>}/> */}
 
        </Routes>
    </Router>

          
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);


// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
