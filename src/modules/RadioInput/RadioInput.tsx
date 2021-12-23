import {
  useField,
} from 'formik';
import { RadioInputStyled, RadioLabelStyled } from './RadioInput.styles';

export type RadioInputProps = {
  timeValue: string | number | Date,
  stateValue: string,
  selectedTime: string,
  key?: string,
  field?: any,
}

export interface RadioLabelProps{
  isSelected?: boolean,
}

export function RadioInput({
  timeValue, selectedTime, stateValue, ...props
}: RadioInputProps) {
  const [field] = useField(props.field);
  return (
    <RadioLabelStyled isSelected={selectedTime === stateValue} htmlFor={`${timeValue}`}>
      <RadioInputStyled {...field} id={`${timeValue}`} type="radio" name="time" value={stateValue} />
      {timeValue}
    </RadioLabelStyled>
  );
}
