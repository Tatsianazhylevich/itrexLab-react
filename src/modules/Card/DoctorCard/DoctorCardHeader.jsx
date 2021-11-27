import React from 'react';
import {
  StyledCardHeader,
  StyledHeaderAbout,
  StyledHeaderInfo,
  StyledAvatar,
  StyledName,
  PatientStatus,
  StatusText,
  More,
} from './DoctorCard.styles';

export function DoctorCardHeader({
  avatar, firstName, lastName, position,
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
            <StatusText>
              {position}
            </StatusText>
          </PatientStatus>
        </StyledHeaderAbout>
      </StyledHeaderInfo>
      <More />
    </StyledCardHeader>
  );
}
