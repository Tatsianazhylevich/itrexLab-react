import React from 'react';
import { StyledButton } from './Button.styles';

export function Button({ ...props }) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
