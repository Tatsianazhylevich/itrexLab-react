import React from 'react';
import { ContainerStyled, TextStyled, NumberStyled } from './SectionHeader.styles';

export function SectionHeader({ sectionNumber, sectionText }) {
  return (
    <ContainerStyled>
      <NumberStyled>{sectionNumber}</NumberStyled>
      <TextStyled>{sectionText}</TextStyled>
    </ContainerStyled>
  );
}
