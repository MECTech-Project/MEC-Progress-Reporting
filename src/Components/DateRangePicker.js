import React from 'react';
import '../Styles/DateRangePicker.css';
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

function WorkDate() {
    return (
        <div>
            <DateRangePickerComponent placeholder="Enter Date Range"
            format="dd-MMM-yyyy"/>
        </div>
    )
}

export default WorkDate;
