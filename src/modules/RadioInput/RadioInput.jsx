import React from 'react';
import {
  useField,
} from 'formik';
import { RadioInputStyled, RadioLabelStyled } from './RadioInput.styles';

export function RadioInput({
  timeValue, selectedTime, stateValue, ...props
}) {
  const [field] = useField(props.field);
  return (
    <RadioLabelStyled isSelected={selectedTime === stateValue} htmlFor={`${timeValue}`}>
      <RadioInputStyled {...field} id={`${timeValue}`} type="radio" name="time" value={stateValue} />
      {timeValue}
    </RadioLabelStyled>
  );
}
