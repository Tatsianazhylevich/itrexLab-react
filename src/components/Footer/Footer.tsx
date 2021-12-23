import { FooterStyled, FooterTextStyled, FooterLinkStyled } from './Footer.styles';

export type FooterProps = {
  footerText: string,
  footerLink: string,
  footerLinkText: string
}

export function Footer({ footerText, footerLink, footerLinkText }: FooterProps) {
  return (
    <FooterStyled>
      <FooterTextStyled>{footerText}</FooterTextStyled>
      <FooterLinkStyled to={footerLink}>{footerLinkText}</FooterLinkStyled>
    </FooterStyled>
  );
}
