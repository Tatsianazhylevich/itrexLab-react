import React from 'react';
import Select from 'react-select';
import { selectStyled } from './SelectStyles';

type OptionsType = {
  label: string;
  value: string;
};


type CustomSelectProps = {
  field: any,
  options: Array<string>,
  component: JSX.Element,
  name: string,
  id: string,
  placeholder: string,
  onChange: (value: OptionsType)=> void,
}
 
export const CustomSelect = ({field, ...props}: CustomSelectProps) => (
  <Select
    {...field}
    {... props}
    styles={selectStyled}
  />
);
