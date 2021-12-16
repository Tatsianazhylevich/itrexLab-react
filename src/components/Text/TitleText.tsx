import React from 'react';
import { TitleStyled } from './Text.styles';

export type TitleProps = {
  children: React.ReactNode
};

export function Title({ children }: TitleProps) {
  return <TitleStyled>{children}</TitleStyled>;
}
