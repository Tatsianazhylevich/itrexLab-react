import React from 'react';
import { ContainerStyles, TextStyles, NumberStyles } from './SectionHeader.styles';

export function SectionHeader({ sectionNumber, sectionText }) {
  return (
    <ContainerStyles>
      <NumberStyles>{sectionNumber}</NumberStyles>
      <TextStyles>{sectionText}</TextStyles>
    </ContainerStyles>
  );
}
