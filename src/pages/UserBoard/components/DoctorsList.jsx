import React from 'react';
import styled from 'styled-components';
import { Doctors } from './Doctors';
import { doctors } from '../../../mocks/doctorsMock';
import anneteBlack from '../../../assets/patients/annete_black.png';

export function DoctorList() {
  return (
    <StyledCardList>
      {doctors.map((doctor) => (
        <Doctors
          avatar={anneteBlack}
          firstName={doctor.firstName}
          lastName={doctor.lastName}
          position={doctor.position}
          reason={doctor.reason}
          time={doctor.time}
          key={doctor.id}
        />
      ))}

    </StyledCardList>
  );
}

const StyledCardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-height: 680px;
    list-style-type: none;
    overflow-y: auto;
    @media(max-width: 1024px) {
        display: flex; 
        justify-content: center;
    }
`;
