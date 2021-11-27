import React from 'react';
import { StyledTitle } from './Text.styles';

export function Title({ ...props }) {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
}
