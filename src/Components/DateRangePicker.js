import React, { useState } from 'react';
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



    

let startDate = "2021-12-10";
let endDate = "2021-12-16";

// const result = plansData.filter(function(obj) {
//     return obj.date >= startDate && obj.date <= endDate;
// });

// console.log(result)

const input = startDate && endDate
const inputTs = Date.parse(input);
const result = plansData.filter(d => Date.parse(d.date) <= inputTs);

console.log(result)


function WorkDate() {
    const [date, setDate] = useState([initDate]);

    const onChange = date => {
        // setDate(date);
        setDate(date.value);
        console.log(date);
    };

    // Mapping plansData (Cards)
    let plans = plansData.map((plan) => {
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
                        change={onChange}
                        value={date}
                        dateFormat="yyyy-MM-dd"
                        /><br/>



                    <div>date - {date}</div>

                    <br/>{plans}<br/>
            </div>
                
                )
    }
        
       
        
export default WorkDate;




        //     <div>
        //     <DatePicker
        //     selected={myPastDate}
        //     onChange={onChange}
        //     selectsStart
        //     startDate={startDate}
        //     endDate={endDate}
        // /></div>
        // <div>
        // <DatePicker
        //     selected={endDate}
        //     onChange={(date) => setEndDate(date)}
        //     selectsEnd
        //     startDate={startDate}
        //     endDate={endDate}
        //     minDate={startDate}
        // /></div>


    // var myCurrentDate=new Date();
    // var myPastDate=new Date(myCurrentDate);
    // myPastDate.setDate(myPastDate.getDate() - 8);
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());


     // function clickHandler() {
        //     console.log("Button was clicked")
        // }