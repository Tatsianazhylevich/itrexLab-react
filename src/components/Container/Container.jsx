import React from 'react';
import { ContainerStyles } from './Container.styles';

export function Container({ children, ...props }) {
  return (
    <ContainerStyles {...props}>
      {children}
    </ContainerStyles>
  );
}
