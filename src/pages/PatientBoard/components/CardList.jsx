import React from 'react';
import styled from 'styled-components';
import { Patients } from './PatientCard/Patients';
import { patients } from '../../../mocks/patientsMock';
import anneteBlack from '../../../assets/patients/annete_black.png';

export function CardList() {
  return (
    <StyledCardList>
      {patients.map((patient) => (
        <Patients
          avatar={anneteBlack}
          firstName={patient.firstName}
          lastName={patient.lastName}
          status={patient.status}
          description={patient.description}
          time={patient.time}
          key={patient.id}
        />
      ))}

    </StyledCardList>
  );
}

const StyledCardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    /* margin-top: 32px; */
    max-height: 680px;
    list-style-type: none;
    overflow-y: auto;
    @media(max-width: 1024px) {
        display: flex; 
        justify-content: center;
    }
`;
