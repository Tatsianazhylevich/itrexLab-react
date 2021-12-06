import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components';
import {
  NavMenu, BoardCard, BoardHeader, DoctorCardList,
} from '../../modules';
import { USER_APPOINTMENT_PATH } from '../../routes/routes';
import { messages, navButtons } from '../../shared';
import { userProfile } from '../Authorization/redux';
import { getUserProfile } from '../Authorization/redux/user/user.selector';
import { WrapperStyled, MainStyled } from './UserView.styles';

export function UserView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(getUserProfile);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  const getAppointment = () => {
    history.push(USER_APPOINTMENT_PATH);
  };

  return (
    <WrapperStyled className="wrapper">
      <Header name={`${user.first_name} ${user.last_name}`} position={`${user.role_name}`} />
      <MainStyled>
        <NavMenu
          buttons={navButtons.usersButtons}
        />
        <BoardCard>
          <BoardHeader
            title={messages.userViewTitle}
            getAppointment={getAppointment}
            isBtnVisible
          />
          <DoctorCardList />
        </BoardCard>
      </MainStyled>
    </WrapperStyled>
  );
}
