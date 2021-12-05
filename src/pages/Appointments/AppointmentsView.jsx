import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components';
import { SelectDoctorForm } from '../../forms';
import { BoardCard, BoardHeader } from '../../modules';
import { userProfile } from '../Authorization/redux';
import { getUserProfile } from '../Authorization/redux/userSelector';
import { WrapperStyled, MainStyled } from './AppointmentsView.styles';
import { messages } from '../../shared';

export function AppointmentsView() {
  const user = useSelector(getUserProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, []);
  return (
    <WrapperStyled className="wrapper">
      <Header name={`${user.first_name} ${user.last_name}`} position={`${user.role_name}`} />
      <MainStyled>
        <BoardCard>
          <BoardHeader title={messages.appointmentsViewTitle} />
          <SelectDoctorForm />
        </BoardCard>
      </MainStyled>
    </WrapperStyled>
  );
}
