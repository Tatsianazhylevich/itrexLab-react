import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import avatar from '../../assets/doctors/mirandaNelson.png';

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

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    @media (max-width: 565px) {
      margin: 0 24px;
      padding: 16px 0;
    }
`;

const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
`;
const LogoImg = styled.img`
     width: 29px;
        height: 32px;
        margin-right: 10px;
`;
const LogoText = styled.h2`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
`;
const HeaderUser = styled.div`
    display: flex;
    align-items: center;
`;
const HeaderUserInfo = styled.div`
   display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 16px;
    @media (max-width: 565px) {
      display: none;
    }
`;
const HeaderUserFoto = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    background: url(${avatar}) no-repeat;
`;
const HeaderUserStatus = styled.div`
     position: absolute;
    right: 0px;
    width: 12px;
    height: 12px;
    background: #34C197;
    border: 3px solid #E3EBFF;
    border-radius: 50%;
`;
const HeaderUserName = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: #202225;
`;
const HeaderUserProfession = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: #a1abc9;
`;
