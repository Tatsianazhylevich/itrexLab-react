import { CardStyled } from './DoctorCard.styles';

import { DoctorCardHeader, DoctorCardMain } from '.';
import { CardProps } from '../Card.types'

export function DoctorCard({
  avatar, firstName, lastName, position, reason, time, dataTestId,
}: CardProps){
  return (
    <CardStyled data-testid={dataTestId}>
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
