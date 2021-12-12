/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from '../../components';
import { SelectDoctorForm } from '../../forms';
import { BoardCard, BoardHeader } from '../../modules';
import { userProfile, getUserProfile } from '../Authorization/redux';
import { WrapperStyled, MainStyled } from './AppointmentsView.styles';
import { messages } from '../../shared';

export function AppointmentsView() {
  const user = useSelector(getUserProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, []);

  return (
    <Wrapper>
      <MainStyled>
        <BoardCard>
          <BoardHeader title={messages.appointmentsViewTitle} />
          <SelectDoctorForm />
        </BoardCard>
      </MainStyled>
    </Wrapper>
  );
}
