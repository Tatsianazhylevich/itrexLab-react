import { ContainerStyled, TextStyled, NumberStyled } from './SectionHeader.styles';

export type SectionHeaderProps = {
  sectionNumber: string,
  sectionText: string
}

export function SectionHeader({ sectionNumber, sectionText }: SectionHeaderProps) {
  return (
    <ContainerStyled>
      <NumberStyled>{sectionNumber}</NumberStyled>
      <TextStyled>{sectionText}</TextStyled>
    </ContainerStyled>
  );
}
