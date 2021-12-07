import React from 'react';
import { TitleStyled } from './Text.styles';

export function Title({ ...props }) {
  return <TitleStyled {...props}>{props.children}</TitleStyled>;
}
