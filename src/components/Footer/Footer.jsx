import React from 'react';
import { StyledFooter, StyledFooterLink, StyledFooterText } from './Footer.styles';

export function Footer({ footerText, footerLink, footerLinkText }) {
  return (
    <StyledFooter>
      <StyledFooterText>{footerText}</StyledFooterText>
      <StyledFooterLink to={footerLink}>{footerLinkText}</StyledFooterLink>
    </StyledFooter>
  );
}
