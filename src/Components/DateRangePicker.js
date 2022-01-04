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
        <Card className="text-center" key={plan.id}>
          <ListGroup.Item variant="primary">Date: {plan.date}</ListGroup.Item>
          <ListGroup.Item variant="dark">
            <h4>{plan.task}</h4>
            <center>{plan.plan}
            </center>
          </ListGroup.Item>
          <Card.Body>
            <Card.Text>{plan.report}</Card.Text>
          </Card.Body>
          <ListGroup.Item variant="dark">
            <center>{plan.plan}</center>
          </ListGroup.Item>
          <Card.Body>
            <Card.Text>{plan.report}</Card.Text>
          </Card.Body>
          <ListGroup.Item variant="dark">
            <center>{plan.plan}</center>
          </ListGroup.Item>
          <Card.Body>
            <Card.Text>{plan.report}.</Card.Text>
          </Card.Body>
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