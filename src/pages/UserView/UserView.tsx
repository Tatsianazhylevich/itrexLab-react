import React, { useEffect } from 'react';
import { useAppDispatch } from '../../shared';
import { useHistory } from 'react-router-dom';
import { MainPage } from '../Main';
import { userProfile } from '../Authorization/redux';
import { MainStyled } from './UserView.styles';
import { InnerUserRoute } from 'routes';


export function UserView() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <MainPage>
      <MainStyled>
        <InnerUserRoute />
      </MainStyled> 
    </MainPage>
  );
}
