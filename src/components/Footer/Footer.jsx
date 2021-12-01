import React from 'react';
import { FooterStyles, FooterTextStyles, FooterLinkStyles } from './Footer.styles';

export function Footer({ footerText, footerLink, footerLinkText }) {
  return (
    <FooterStyles>
      <FooterTextStyles>{footerText}</FooterTextStyles>
      <FooterLinkStyles to={footerLink}>{footerLinkText}</FooterLinkStyles>
    </FooterStyles>
  );
}
