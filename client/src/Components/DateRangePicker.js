import React, { useState, useEffect } from "react";
import "../Styles/DateRangePicker.css";
import DateRangePicker from "react-bootstrap-daterangepicker";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import { ListGroup, Card } from "react-bootstrap";
import plansData from "./Plans";

function WorkDate() {
  const [result, setResult] = useState([]);
  const [BfiveDays, setBfiveDays] = useState([]);
  const [today, setToday] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);

function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    // let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    // if (seconds < 10) {seconds = "0"+seconds;}
    return `${hours}:${minutes}` 
}

  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    const ddd = dd - 5;
    const BfiveDays = (today = mm + "/" + ddd + "/" + yyyy);
    today = mm + "/" + dd + "/" + yyyy;
    setToday(today);
    setBfiveDays(BfiveDays);
    const results = plansData.filter(function (obj) {
      return obj.date >= BfiveDays && obj.date <= today;
    });
    setResult(results);
  }, []);

  const handleCallback = (start, end, label) => {
    let startDate = formatDate(start);
    let endDate = formatDate(end);
    setStartDate(startDate);
    setEndDate(endDate);

    console.log("start", startDate, endDate);
    const results = plansData.filter(function (obj) {
      return obj.date >= startDate && obj.date <= endDate;
    });
    setResult(results);
    setToday(false);
    console.log("results", results);
  };

  const formatDate = (start) => {
    var dd = String(start._d.getDate()).padStart(2, "0");
    var mm = String(start._d.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = start._d.getFullYear();
    let today = mm + "/" + dd + "/" + yyyy;
    return today;
  };
  let plan = result.map((plan) => {
    return (
      <div key={plan.id}>
        <Card className="text-center .col-lg-$" key={plan.id}>
          <ListGroup.Item variant="primary">Date: {plan.date}</ListGroup.Item>
          <ListGroup.Item variant="dark">
            <h4>{plan.task}</h4>
            <center>
              {plan.plan1}
            </center>
          </ListGroup.Item>
          <ListGroup.Item>
              {plan.report1}{plan.completed1 ? <div style={{color: "green"}}> yes I have finished the work </div> : <div style={{color: "red"}}>"No I couldn't"</div>}<br/>
            ({convertHMS(plan.time1)})Hrs
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <center>{plan.plan2}</center>
          </ListGroup.Item>
          <ListGroup.Item>
            {plan.report2}
            {plan.completed2 ? <div style={{color: "green"}}> yes I have finished the work </div> : <div style={{color: "red"}}>"No I couldn't"</div>}<br/>
            ({convertHMS(plan.time2)})Hrs
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <center>{plan.plan3}</center>
          </ListGroup.Item>
          <ListGroup.Item>
            {plan.report3}
            {plan.completed3 ? <div style={{color: "green"}}> yes I have finished the work </div> : <div style={{color: "red"}}>"No I couldn't"</div>}<br/>
            ({convertHMS(plan.time3)})Hrs
          </ListGroup.Item>
          <ListGroup.Item variant="dark">{convertHMS((plan.time1 + plan.time2 + plan.time3))} Hrs</ListGroup.Item>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <DateRangePicker
        // locale={{ format: "DD/MM/YYYY" }}
        onCallback={handleCallback}
        initialSettings={{ startDate: BfiveDays, endDate: today }}
      >
        <button>
          {today ? `${BfiveDays} - ${today}` : `${startDate} - ${endDate}`}
        </button>
      </DateRangePicker>
      {plan}
    </div>
  );
}

export default WorkDate;