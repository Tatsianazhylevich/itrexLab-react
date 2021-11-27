import React from 'react';
import Select from 'react-select';
import { selectStyles } from './SelectStyles';

export const CustomSelect = (field, props) => (
  <Select
    {...field}
    {... props}
    styles={selectStyles}
  />
);
