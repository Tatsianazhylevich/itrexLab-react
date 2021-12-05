import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorCard } from '../../Card/DoctorCard/DoctorCard';
// import { doctors } from '../../../mocks/doctorsMock';
import { CardListStyled } from './DoctorCardList.styles';
import anneteBlack from '../../../assets/patients/annete_black.png';
import { allApppointmentsOfPatient, getAllAppointmentsforPatient } from '../../../pages/Appointments/redux';

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
          time={doctor.visit_date}
          key={doctor.id}
        />
      )) : <p>There are no posts here yet</p>}

    </CardListStyled>
  );
}
