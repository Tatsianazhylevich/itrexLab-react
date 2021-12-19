import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector, getDateFormat, messages } from 'shared';
import { DoctorCard } from '../../../../modules/Card/DoctorCard/DoctorCard';
import { CardListStyled } from './DoctorCardList.styles';
import anneteBlack from '../../../../assets/patients/annete_black.png';
import { allApppointmentsOfPatient, getAllAppointmentsforPatient } from '../../redux';
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

export interface AppointmentForPatient extends Appointment {
  doctor: {
    last_name: 'string',
    first_name: 'string',
    id: 'string',
    photo: 'string',
    specialization_name: 'string',
  };
}

export function DoctorCardList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllAppointmentsforPatient({ offset: 0, limit: 20 }));
  }, [dispatch]);

  const { appointments } = useAppSelector(allApppointmentsOfPatient);
  

  return (
    <CardListStyled>

      { appointments.length ? appointments.map((doctor: AppointmentForPatient) => (
        <DoctorCard
          avatar={anneteBlack}
          firstName={doctor.doctor.first_name}
          lastName={doctor.doctor.last_name}
          position={doctor.doctor.specialization_name}
          reason={doctor.reason}
          time={getDateFormat(doctor.visit_date)}
          key={doctor.id}
          dataTestId="doctorCard"
        />
      )) : <EmptyPage text1={messages.emptyPagePatientText} />}

    </CardListStyled>
  );
}
