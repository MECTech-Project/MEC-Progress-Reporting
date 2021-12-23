import React, { useState, useEffect } from 'react';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import '../Styles/DateRangePicker.css';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { ListGroup, Card } from 'react-bootstrap';
import plansData from './Plans';

// showing before 5 days ago and the format on the date range picker.
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
const ddd = dd - 5;
const BfiveDays = today = ddd + '/' + mm + '/' + yyyy;
today = dd + '/' + mm + '/' + yyyy;
const initDate = `${BfiveDays} - ${today}`







// const input = startDate && endDate
// const inputTs = Date.parse(input);
// const result = plansData.filter(d => Date.parse(d.date) <= inputTs);

// console.log(result)


function WorkDate() {
    const [dates, setDates] = useState({ value: initDate });
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [result, setResult] = useState([]);




    const onChange = date => {
        // setDate(date);
        setDates(date);
        // let startD = date.target.closeEventArgs.date.substring(0,10) 
        // console.log(startD)

        console.log("date", dates);
        let startD = date.target.closeEventArgs.date.substring(0, 10)
        let endD = date.target.closeEventArgs.date.substring(12, 23)
        setStartDate(startD)
        setEndDate(endD)
        console.log("dateeee", endD);
    filter()

    };


    const filter = () => {
       
        const results = plansData.filter(function (obj) {
            return obj.date >= startDate && obj.date <= endDate;
        });
        setResult(results)
        console.log(results)
    }

    // useEffect(() => {


    //     return () => {
    //     }
    // }, [startDate, endDate, dates])

    // Mapping plansData (Cards)
    let plans = result.map((plan) => {
        return (
            <div key={plan.id}>
                <Card className="text-center" key={plan.id}>
                    <ListGroup.Item variant="primary">Date of:  </ListGroup.Item>
                    <ListGroup.Item variant="dark"><h4>{plan.task}</h4><center>{plan.plan}</center>
                    </ListGroup.Item>
                    <Card.Body>
                        <Card.Text>
                            {plan.report}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup.Item variant="dark"><center>{plan.plan}</center></ListGroup.Item>
                    <Card.Body>
                        <Card.Text>
                            {plan.report}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup.Item variant="dark"><center>{plan.plan}</center></ListGroup.Item>
                    <Card.Body>
                        <Card.Text>
                            {plan.report}.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    })


    return (
        <div>
            {/* date range picker component */}
            <DateRangePickerComponent placeholder="Enter Date Range"
                onChange={onChange}
                value={dates.value}
                dateFormat="yyyy-MM-dd"
            /><br />

<p>{endDate}</p>

            <br />{plans}<br />
        </div>

    )
}



export default WorkDate;