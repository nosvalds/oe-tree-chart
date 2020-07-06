import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const DateFilter = ({ initStartDate, initEndDate, onApply }) =>  {
    const [startDate, setStartDate] = useState(new Date(initStartDate));
    const [endDate, setEndDate] = useState(new Date(initEndDate));

  return (
    <>
        <h3>Date Range Filter</h3>
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        />
        <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        />
        <button
        onClick={ () => onApply(startDate, endDate) }
        >
        Apply
        </button>
    </>
  );
}

export default DateFilter;