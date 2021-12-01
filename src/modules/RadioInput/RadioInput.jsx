import React from 'react';
import {
  useField,
} from 'formik';
import { RadioInputStyles, RadioLabelStyles } from './RadioInput.styles';

export function RadioInput({ timeValue, selectedTime, ...props }) {
  const [field] = useField(props.field);
  return (
    <RadioLabelStyles isSelected={selectedTime === timeValue} htmlFor={`${timeValue}`}>
      <RadioInputStyles {...field} id={`${timeValue}`} type="radio" name="time" value={timeValue} />
      {timeValue}
    </RadioLabelStyles>
  );
}
