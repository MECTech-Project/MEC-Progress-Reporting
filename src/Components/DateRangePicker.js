import React, { useState } from 'react';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import '../Styles/DateRangePicker.css';


// showing before 5 days ago and the format on the date range picker.
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0'); 
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
const ddd = dd - 5;
const BfiveDays = today = ddd + '/' + mm + '/' + yyyy;
today = dd + '/' + mm + '/' + yyyy;
const initDate = `${BfiveDays} - ${today}`



// Showing the content by filtering on console.log
const dates = [
    {
        id: 1,
        date: "2021-12-10",
        name: "cake"
    },
    {
        id:2,
        date: "2021-12-15",
        name:"chips"
    },
    {
        id:3,
        date: "2020-12-16",
        name:"batata"
    },
]

const startDate = "2021-12-10";
const endDate = "2021-12-16";

const result = dates.filter(function(obj) {
    return obj.date >= startDate && obj.date <= endDate;
});

console.log(result)


function WorkDate() {
    const [date, setDate] = useState([initDate]);

    const onChange = date => {
        // setDate(date);
        setDate(date.value);
        console.log(date);
    };

    const RenderDates = () => {
        return dates.map(date => {
            return (
                <h1>{dates.date}</h1>
            )
        })
    }

    return (
        <div>
            <DateRangePickerComponent placeholder="Enter Date Range"
                onChange={onChange}
                value={date}
                format = "dd-MM-yyyy" />
                <RenderDates />
                 
            {/* {console.log(date)} */}

        </div>
    );
}

export default WorkDate;
