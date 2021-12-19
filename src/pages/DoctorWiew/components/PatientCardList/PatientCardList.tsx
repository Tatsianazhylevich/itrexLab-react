import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch, getDateFormat, messages } from 'shared';
import { PatientCard } from '../../../../modules/Card';
import { CardListStyled } from './PatientCardList.styles';
import anneteBlack from '../../../../assets/patients/annete_black.png';
import { getPatients, doctorsAppointments } from '../../redux';
import { EmptyPage } from 'pages';

export interface Appointment {
  id: 'string',
  reason: 'string',
  note: 'string',
  patient_id: 'string',
  doctor_id: 'string',
  visit_date: 'string',
  status: 'string',
}

export interface AppointmentForDoctor extends Appointment {
  patient: {
    last_name: 'string',
    first_name: 'string',
    id: 'string',
    photo: 'string',
  };
}


export function PatientCardList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPatients({offset: 0, limit: 20}));
  }, [dispatch]);

const { appointments } = useAppSelector(doctorsAppointments);

  return (
    <CardListStyled>
      {appointments.length ? appointments.map((patient: AppointmentForDoctor) => (
        <PatientCard
          avatar={anneteBlack}
          firstName={patient.patient.first_name}
          lastName={patient.patient.last_name}
          status={patient.status}
          description={patient.reason}
          time={getDateFormat(patient.visit_date)}
          key={patient.id}
          dataTestId="patientCard"
        />
      )) : <EmptyPage text1={messages.emptyPageDoctorText1} text2={messages.emptyPageDoctorText2} />}

    </CardListStyled>
  );
}
