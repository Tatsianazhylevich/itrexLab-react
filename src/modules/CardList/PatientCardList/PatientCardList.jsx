import React from 'react';
import { PatientCard } from '../../Card';
import { patients } from '../../../mocks/patientsMock';
import { CardListStyles } from './PatientCardList.styles';
import anneteBlack from '../../../assets/patients/annete_black.png';

export function PatientCardList() {
  return (
    <CardListStyles>
      {patients.map((patient) => (
        <PatientCard
          avatar={anneteBlack}
          firstName={patient.firstName}
          lastName={patient.lastName}
          status={patient.status}
          description={patient.description}
          time={patient.time}
          key={patient.id}
        />
      ))}

    </CardListStyles>
  );
}
