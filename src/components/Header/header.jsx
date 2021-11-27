import React from 'react';
import logo from '../../assets/logo.png';
import {
  StyledHeader,
  HeaderLogo,
  LogoImg,
  LogoText,
  HeaderUser,
  HeaderUserFoto,
  HeaderUserInfo,
  HeaderUserName,
  HeaderUserProfession,
  HeaderUserStatus,
} from './Header.styles';

export function Header({ name, position }) {
  return (
    <StyledHeader>
      <HeaderLogo>
        <LogoImg src={logo} alt="logo" />
        <LogoText>palm clinic</LogoText>
      </HeaderLogo>
      <HeaderUser>
        <HeaderUserInfo>
          <HeaderUserName>{name}</HeaderUserName>
          <HeaderUserProfession>{position}</HeaderUserProfession>
        </HeaderUserInfo>
        <HeaderUserFoto>
          <HeaderUserStatus />
        </HeaderUserFoto>
      </HeaderUser>
    </StyledHeader>
  );
}
