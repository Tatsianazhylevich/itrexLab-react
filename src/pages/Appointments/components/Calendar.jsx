import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function StyledCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date} />
    </div>

  );
}
