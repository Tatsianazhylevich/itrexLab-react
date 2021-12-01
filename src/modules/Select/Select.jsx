import React from 'react';
import Select from 'react-select';
import { selectStyled } from './SelectStyles';

export const CustomSelect = (field, props) => (
  <Select
    {...field}
    {... props}
    styles={selectStyled}
  />
);
