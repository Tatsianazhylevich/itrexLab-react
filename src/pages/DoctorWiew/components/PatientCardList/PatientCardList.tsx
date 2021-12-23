import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch, FormatDateForCards, messages } from 'shared';
import { PatientCard } from 'modules/Card';
import { CardListStyled } from './PatientCardList.styles';
import anneteBlack from '../../../../assets/patients/annete_black.png';
import { getPatients, doctorsAppointments, loadingForDoctorAppointments } from '../../redux';
import { EmptyPage, AppointmentForDoctor } from 'pages';
import { Spinner } from 'components';

export function PatientCardList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPatients({offset: 0, limit: 20}));
  }, [dispatch]);

const { appointments } = useAppSelector(doctorsAppointments);
const isLoading = useAppSelector(loadingForDoctorAppointments);

  return (
    <CardListStyled>
      {!isLoading ? (appointments.length ? appointments.map((patient: AppointmentForDoctor) => (
        <PatientCard
          avatar={anneteBlack}
          firstName={patient.patient.first_name}
          lastName={patient.patient.last_name}
          status={patient.status}
          description={patient.reason}
          time={FormatDateForCards(patient.visit_date)}
          key={patient.id}
          dataTestId="patientCard"
        />
      )) : <EmptyPage text1={messages.emptyPageDoctorText1} text2={messages.emptyPageDoctorText2} />): <Spinner />}

    </CardListStyled>
  );
}
