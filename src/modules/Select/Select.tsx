import React from 'react';
import Select, { SingleValue } from 'react-select';
import { selectStyled } from './SelectStyles';

type OptionsType = {
  label: string;
  value: string;
};


type CustomSelectProps = {
  field: any,
  options: OptionsType[],
  value: string,
  component: JSX.Element,
  name: string,
  id: string,
  placeholder: string,
  onChange: (newValue: SingleValue<string | OptionsType>) => void,
}
 
export const CustomSelect = ({field, options, value, ...props}: CustomSelectProps) => {
  const defaultValue = (optionsArr:OptionsType[], val: string) => (optionsArr ? options.find((option) => option.value === val) : '');

  return (
    <Select
    {...field}
    {... props}
    value={defaultValue(options, value)}
    styles={selectStyled}
    options={options}
  />
  )

};
