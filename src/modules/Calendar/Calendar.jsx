import React, { useCallback, useMemo } from 'react';
import Calendar from 'react-calendar';
import { daysArr } from '../../shared/constants/weekDays';
import 'react-calendar/dist/Calendar.css';
import './calendarStyles/calendar.css';

export function CalendarStyled({ value, onChange }) {
  const getShortWeekday = useCallback((locale, date) => daysArr[date.getDay()], []);
  const minDate = useMemo(() => new Date(), []);

  return (
    <div className="calendar-container">
      <Calendar
        value={value}
        onClickDay={onChange}
        locale="en-US"
        minDate={minDate}
        formatShortWeekday={getShortWeekday}
      />
    </div>

  );
}
