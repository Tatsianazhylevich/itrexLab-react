import React, { } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarStyles/calendar.css';

export function StyledCalendar({ value, onChange }) {
  return (
    <div className="calendar-container">
      <Calendar
        value={value}
        onClickDay={onChange}
        locale="en-US"
        minDate={new Date()}
        formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
      />
    </div>

  );
}
