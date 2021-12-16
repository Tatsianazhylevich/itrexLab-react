import React from 'react';
import logo from '../../assets/logo.png';
import {
  HeaderStyled,
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

export type HeaderProps = {
  name: string,
  position: string,
  avatar: string
}

export function Header({ name, position, avatar }: HeaderProps) {
  return (
    <HeaderStyled>
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
          <img alt='avatar' height='40' width='40' src={avatar}></img>
          <HeaderUserStatus />
        </HeaderUserFoto>
      </HeaderUser>
    </HeaderStyled>
  );
}
