import React from 'react';
import {
  CardHeaderStyled,
  HeaderInfoStyled,
  AvatarStyles,
  HeaderAboutStyled,
  NameStyled,
  PatientStatus,
  StatusText,
  Status,
  More,
} from './PatientCard.styles';

export function PatientCardHeader({
  avatar, firstName, lastName, status,
}) {
  return (
    <CardHeaderStyled>
      <HeaderInfoStyled>
        <AvatarStyles src={avatar} alt="avatar" />
        <HeaderAboutStyled>
          <NameStyled>
            {firstName}
            {' '}
            {lastName}
          </NameStyled>
          <PatientStatus>
            <Status />
            <StatusText>
              {status}
            </StatusText>
          </PatientStatus>
        </HeaderAboutStyled>
      </HeaderInfoStyled>
      <More />
    </CardHeaderStyled>
  );
}
