import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MainPage } from '../Main';
import { SelectDoctorForm } from './components/SelectDoctorForm';
import { BoardCard, BoardHeader } from '../../modules';
import { userProfile } from '../Authorization/redux';
import { MainStyled } from './AppointmentsView.styles';
import { messages } from '../../shared';

export function AppointmentsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, []);

  return (
    <MainPage>
      <MainStyled>
        <BoardCard>
          <BoardHeader title={messages.appointmentsViewTitle} />
          <SelectDoctorForm />
        </BoardCard>
      </MainStyled>
    </MainPage>
  );
}
