import React from 'react';
import { ContainerStyled } from './Container.styles';

export function Container({ children, ...props }) {
  return (
    <ContainerStyled {...props}>
      {children}
    </ContainerStyled>
  );
}
