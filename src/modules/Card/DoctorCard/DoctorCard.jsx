import React from 'react';
import { CardStyled } from './DoctorCard.styles';

import { DoctorCardHeader, DoctorCardMain } from '.';

export function DoctorCard({
  avatar, firstName, lastName, position, reason, time,
}) {
  return (
    <CardStyled>
      <DoctorCardHeader
        avatar={avatar}
        firstName={firstName}
        lastName={lastName}
        position={position}
      />
      <DoctorCardMain reason={reason} time={time} />
    </CardStyled>
  );
}
