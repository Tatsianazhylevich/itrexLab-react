import React from 'react';
import {
  useField,
} from 'formik';
import { StyledRadioInput, StyledRadioLabel } from './RadioInput.styles';

export function RadioInput({ timeValue, selectedTime, ...props }) {
  const [field] = useField(props.field);
  return (
    <StyledRadioLabel isSelected={selectedTime === timeValue} htmlFor={`${timeValue}`}>
      <StyledRadioInput {...field} id={`${timeValue}`} type="radio" name="time" value={timeValue} />
      {timeValue}
    </StyledRadioLabel>
  );
}
