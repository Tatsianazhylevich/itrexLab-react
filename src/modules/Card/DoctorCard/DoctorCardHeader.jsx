import React from 'react';
import {
  CardHeaderStyled,
  HeaderAboutStyled,
  HeaderInfoStyled,
  AvatarStyled,
  NameStyled,
  PatientStatus,
  StatusText,
  More,
} from './DoctorCard.styles';

export function DoctorCardHeader({
  avatar, firstName, lastName, position,
}) {
  return (
    <CardHeaderStyled>
      <HeaderInfoStyled>
        <AvatarStyled src={avatar} alt="avatar" />
        <HeaderAboutStyled>
          <NameStyled>
            {firstName}
            {' '}
            {lastName}
          </NameStyled>
          <PatientStatus>
            <StatusText>
              {position}
            </StatusText>
          </PatientStatus>
        </HeaderAboutStyled>
      </HeaderInfoStyled>
      <More />
    </CardHeaderStyled>
  );
}
