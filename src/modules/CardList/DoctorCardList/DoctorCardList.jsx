import React from 'react';
import { DoctorCard } from '../../Card/DoctorCard/DoctorCard';
import { doctors } from '../../../mocks/doctorsMock';
import { CardListStyled } from './DoctorCardList.styles';
import anneteBlack from '../../../assets/patients/annete_black.png';

export function DoctorCardList() {
  return (
    <CardListStyled>
      {doctors.map((doctor) => (
        <DoctorCard
          avatar={anneteBlack}
          firstName={doctor.firstName}
          lastName={doctor.lastName}
          position={doctor.position}
          reason={doctor.reason}
          time={doctor.time}
          key={doctor.id}
        />
      ))}

    </CardListStyled>
  );
}
