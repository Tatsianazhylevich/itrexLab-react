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
import { CardProps } from '../Card.types'

export function DoctorCardHeader({
  avatar, firstName, lastName, position,
}: CardProps): JSX.Element {
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
