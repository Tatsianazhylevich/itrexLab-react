import React from 'react';
import { ButtonStyles } from './Button.styles';

export function Button({ ...props }) {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
}
