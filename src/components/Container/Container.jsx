import React from 'react';
import { StyledContainer } from './Container.styles';

export function Container({ children, ...props }) {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  );
}
