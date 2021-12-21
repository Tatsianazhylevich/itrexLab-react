import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector, FormatDateForCards, messages } from 'shared';
import { DoctorCard } from 'modules';
import { CardListStyled } from './DoctorCardList.styles';
import anneteBlack from '../../../../assets/patients/annete_black.png';
import { allApppointmentsOfPatient, getAllAppointmentsforPatient } from '../../redux';
import { EmptyPage, AppointmentForPatient } from 'pages';

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
          time={FormatDateForCards(doctor.visit_date)}
          key={doctor.id}
          dataTestId="doctorCard"
        />
      )) : <EmptyPage text1={messages.emptyPagePatientText} />}

    </CardListStyled>
  );
}
