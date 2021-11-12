import React from 'react';
import styled from 'styled-components';

export function CardHeader({
  avatar, firstName, lastName, status,
}) {
  return (
    <StyledCardHeader>
      <StyledHeaderInfo>
        <StyledAvatar src={avatar} alt="avatar" />
        <StyledHeaderAbout>
          <StyledName>
            {firstName}
            {' '}
            {lastName}
          </StyledName>
          <PatientStatus>
            <Status />
            <StatusText>
              {status}
            </StatusText>
          </PatientStatus>
        </StyledHeaderAbout>
      </StyledHeaderInfo>
      <More />
    </StyledCardHeader>
  );
}

const StyledCardHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    ::before {
    position: absolute;
    top: 75px;
    right: -32px;
    content: '';
    background-color: #DCE0EC;
    width: 406px;
    height: 1px;
    @media(max-width: 1024px) {
      right: 0px;
      width: 100%;;
    }
    }
`;
const StyledHeaderInfo = styled.div`
    display: flex;
`;
const StyledAvatar = styled.img`
    position: relative;
    width: 48px;
    height: 48px;
`;

const StyledHeaderAbout = styled.div`
    margin: 11px 17px;
`;

const StyledName = styled.h4`
        margin-bottom: 5px;
        font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
    color: #202225;
`;

const PatientStatus = styled.div`
    display: flex
`;

const Status = styled.div`
    width: 12px;
    height: 12px;
    background: #34C197;
    border: 3px solid #E3EBFF;
    border-radius: 50%;
`;

const StatusText = styled.div`
    margin-left: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: #a1abc9;
`;

const More = styled.div`
    position: relative;
    width: 5px;
    height: 5px;
    background: #DCE0EC;
    border-radius: 50%;
    
    &:before {
    position: absolute;
    content: '';
    top: 7px;
    width: 5px;
    height: 5px;
    background: #DCE0EC;
    border-radius: 50%;
    }
    &:after {
    position: absolute;
    content: '';
    bottom: 7px;
    width: 5px;
    height: 5px;
    background: #DCE0EC;
    border-radius: 50%;
    }
`;
