import React from 'react';
import { FooterStyled, FooterTextStyled, FooterLinkStyled } from './Footer.styles';

export function Footer({ footerText, footerLink, footerLinkText }) {
  return (
    <FooterStyled>
      <FooterTextStyled>{footerText}</FooterTextStyled>
      <FooterLinkStyled to={footerLink}>{footerLinkText}</FooterLinkStyled>
    </FooterStyled>
  );
}
