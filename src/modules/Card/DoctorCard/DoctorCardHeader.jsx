import React from 'react';
import {
  CardHeaderStyles,
  HeaderAboutStyles,
  HeaderInfoStyles,
  AvatarStyles,
  NameStyles,
  PatientStatus,
  StatusText,
  More,
} from './DoctorCard.styles';

export function DoctorCardHeader({
  avatar, firstName, lastName, position,
}) {
  return (
    <CardHeaderStyles>
      <HeaderInfoStyles>
        <AvatarStyles src={avatar} alt="avatar" />
        <HeaderAboutStyles>
          <NameStyles>
            {firstName}
            {' '}
            {lastName}
          </NameStyles>
          <PatientStatus>
            <StatusText>
              {position}
            </StatusText>
          </PatientStatus>
        </HeaderAboutStyles>
      </HeaderInfoStyles>
      <More />
    </CardHeaderStyles>
  );
}
