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



    

const startDate = "16/12/2021";
const endDate = "21/12/2021";

const result = plansData.filter(function(obj) {
    return obj.date >= startDate && obj.date <= endDate;
});

console.log(result)


function WorkDate() {
    const [dates, setDates] = useState([initDate]);


    const onChange = date => {
        // setDate(date);
        setDates(date);
        console.log("date", dates);

    };

    useEffect(() => {
        console.log("date1", dates);
        
      
    }, [dates])

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
                        value={dates}
                        dateFormat="yyyy-MM-dd"
                        /><br/>



                    <br/>{plans}<br/>
            </div>
                
                )
    }
        
       
        
export default WorkDate;