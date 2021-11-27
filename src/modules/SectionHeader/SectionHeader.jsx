import React from 'react';
import { StyledContainer, StyledText, StyledNumber } from './SectionHeader.styles';

export function SectionHeader({ number, text }) {
  return (
    <StyledContainer>
      <StyledNumber>{number}</StyledNumber>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
}
