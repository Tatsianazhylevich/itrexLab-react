import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorCard } from '../../../../modules/Card/DoctorCard/DoctorCard';
import { CardListStyled } from './DoctorCardList.styles';
import anneteBlack from '../../../../assets/patients/annete_black.png';
import { allApppointmentsOfPatient, getAllAppointmentsforPatient } from '../../redux';
import { getDateFormat } from '../../../../shared';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointmentsforPatient());
  }, [dispatch]);

  const { appointments } = useSelector(allApppointmentsOfPatient);

  return (
    <CardListStyled>

      {appointments ? appointments.map((doctor: AppointmentForPatient) => (
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
      )) : <div>no doctors</div>}

    </CardListStyled>
  );
}
