import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector, FormatDateForCards, messages } from 'shared';
import { DoctorCard } from 'modules';
import { CardListStyled } from './DoctorCardList.styles';
import anneteBlack from '../../../../assets/patients/annete_black.png';
import { allApppointmentsOfPatient, getAllAppointmentsforPatient, loadingForAppointments } from '../../redux';
import { EmptyPage, AppointmentForPatient } from 'pages';
import { Spinner } from 'components';

export function DoctorCardList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllAppointmentsforPatient({ offset: 0, limit: 20 }));
  }, [dispatch]);

  const { appointments } = useAppSelector(allApppointmentsOfPatient);
  const isLoading = useAppSelector(loadingForAppointments);
  

  return (
    <CardListStyled>

      { !isLoading ? (appointments.length ? appointments.map((doctor: AppointmentForPatient) => (
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
      )) : <EmptyPage text1={messages.emptyPagePatientText} />) : <Spinner />}

    </CardListStyled>
  );
}
