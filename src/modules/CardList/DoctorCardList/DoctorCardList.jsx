import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorCard } from '../../Card/DoctorCard/DoctorCard';
import { CardListStyled } from './DoctorCardList.styles';
import anneteBlack from '../../../assets/patients/annete_black.png';
import { allApppointmentsOfPatient, getAllAppointmentsforPatient } from '../../../pages/UserView/redux';
import { getDateFormat } from '../../../shared';

export function DoctorCardList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointmentsforPatient());
  }, [dispatch]);

  const { appointments } = useSelector(allApppointmentsOfPatient);
  console.log(appointments);

  return (
    <CardListStyled>

      {appointments ? appointments.map((doctor) => (
        <DoctorCard
          avatar={anneteBlack}
          firstName={doctor.doctor.first_name}
          lastName={doctor.doctor.last_name}
          position={doctor.doctor.specialization_name}
          reason={doctor.reason}
          time={getDateFormat(doctor.visit_date)}
          key={doctor.id}
        />
      )) : <h3>You don't have an appointment with a doctor yet</h3>}

    </CardListStyled>
  );
}
