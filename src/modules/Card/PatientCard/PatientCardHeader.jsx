import React from 'react';
import {
  CardHeaderStyles,
  HeaderInfoStyles,
  AvatarStyles,
  HeaderAboutStyles,
  NameStyles,
  PatientStatus,
  StatusText,
  Status,
  More,
} from './PatientCard.styles';

export function PatientCardHeader({
  avatar, firstName, lastName, status,
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
            <Status />
            <StatusText>
              {status}
            </StatusText>
          </PatientStatus>
        </HeaderAboutStyles>
      </HeaderInfoStyles>
      <More />
    </CardHeaderStyles>
  );
}
