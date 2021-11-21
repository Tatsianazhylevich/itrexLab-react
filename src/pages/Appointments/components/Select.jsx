import React from 'react';
import Select from 'react-select';
import { selectStyles } from './SelectStyles';

export const MySelect = (field, props) => (
  <Select
    {...field}
    {... props}
    styles={selectStyles}
  />
);
