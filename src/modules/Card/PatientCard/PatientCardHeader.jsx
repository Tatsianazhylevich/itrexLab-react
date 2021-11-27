import React from 'react';
import {
  StyledCardHeader,
  StyledHeaderInfo,
  StyledAvatar,
  StyledHeaderAbout,
  StyledName,
  PatientStatus,
  StatusText,
  Status,
  More,
} from './PatientCard.styles';

export function PatientCardHeader({
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
