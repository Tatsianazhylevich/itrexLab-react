import React from 'react';
import { StyledCard } from './DoctorCard.styles';

import { DoctorCardHeader, DoctorCardMain } from '.';

export function DoctorCard({
  avatar, firstName, lastName, position, reason, time,
}) {
  return (
    <StyledCard>
      <DoctorCardHeader
        avatar={avatar}
        firstName={firstName}
        lastName={lastName}
        position={position}
      />
      <DoctorCardMain reason={reason} time={time} />
    </StyledCard>
  );
}
