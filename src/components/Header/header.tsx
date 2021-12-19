import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  HeaderStyled,
  HeaderLogo,
  LogoImg,
  LogoText,
  LogoLink,
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
  avatar: string,
  path: string 
}

export function Header({ name, position, avatar, path }: HeaderProps) {
  return (
    <HeaderStyled>
      <LogoLink to={path}>
        <HeaderLogo>
          <LogoImg src={logo} alt="logo" />
          <LogoText>palm clinic</LogoText>
        </HeaderLogo>
      </LogoLink>
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
