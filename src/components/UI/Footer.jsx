import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SIGN_IN_PATH, SIGN_UP_PATH } from '../routes';

export function Footer(props) {
  let footerText = '';
  let footerLink = '';
  let footerLinkText = '';

  // eslint-disable-next-line default-case
  switch (props.link) {
    case SIGN_IN_PATH:
      footerText = 'Don\'t have an account?';
      footerLink = SIGN_UP_PATH;
      footerLinkText = 'Sign Up';
      break;
    case SIGN_UP_PATH:
      footerText = 'Already have an account?';
      footerLink = SIGN_IN_PATH;
      footerLinkText = 'Sign In';
  }
  if (footerText) {
    return (
      <StyledFooter className="sign-bar__have-account">
        <StyledFooterText>{footerText}</StyledFooterText>
        <Link to={footerLink}>{footerLinkText}</Link>
      </StyledFooter>
    );
  }
  return '';
}

const StyledFooter = styled.div`
    display: flex;
    margin-top: 85px;
`;

const StyledFooterText = styled.span`
    margin-right: 20px;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
    color: #A1ABC9;
`;
