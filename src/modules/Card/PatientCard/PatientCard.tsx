import React from 'react';
import { PatientCardHeader, PatientCardMain } from '.';
import { CardStyled } from './PatientCard.styles';
import { CardProps } from '../Card.types'

export function PatientCard({
  avatar, firstName, lastName, status, description, time, dataTestId,
}: CardProps) {
  return (
    <CardStyled data-testid={dataTestId}>
      <PatientCardHeader
        avatar={avatar}
        firstName={firstName}
        lastName={lastName}
        status={status}
      />
      <PatientCardMain description={description} time={time} />
    </CardStyled>
  );
}
