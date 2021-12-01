import React from 'react';
import { PatientCardHeader, PatientCardMain } from '.';
import { CardStyles } from './PatientCard.styles';

export function PatientCard({
  avatar, firstName, lastName, status, description, time,
}) {
  return (
    <CardStyles>
      <PatientCardHeader
        avatar={avatar}
        firstName={firstName}
        lastName={lastName}
        status={status}
      />
      <PatientCardMain description={description} time={time} />
    </CardStyles>
  );
}
