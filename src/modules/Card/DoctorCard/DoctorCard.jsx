import React from 'react';
import { CardStyles } from './DoctorCard.styles';

import { DoctorCardHeader, DoctorCardMain } from '.';

export function DoctorCard({
  avatar, firstName, lastName, position, reason, time,
}) {
  return (
    <CardStyles>
      <DoctorCardHeader
        avatar={avatar}
        firstName={firstName}
        lastName={lastName}
        position={position}
      />
      <DoctorCardMain reason={reason} time={time} />
    </CardStyles>
  );
}
