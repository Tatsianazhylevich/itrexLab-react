import React from 'react';
import { TitleStyles } from './Text.styles';

export function Title({ ...props }) {
  return <TitleStyles {...props}>{props.children}</TitleStyles>;
}
