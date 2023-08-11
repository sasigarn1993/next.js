// components/DateRangePicker.js
import React, { useState } from 'react';
import { DatePicker, Button } from 'antd';
import moment from 'moment';

const DateRangePicker = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
  };

  const handleFetchData = () => {
    if (startDate && endDate) {
      onDateRangeChange(startDate, endDate);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <DatePicker.RangePicker onChange={handleDateChange} />
      <Button type="primary" style={{ marginLeft: 10 }} onClick={handleFetchData}>
        Fetch Data
      </Button>
    </div>
  );
};

export default DateRangePicker;
