import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared';
import { Header } from 'components';
import { DOCTOR_VIEW_PATH, PATIENT_VIEW_PATH } from 'routes';
import { userProfile, getUserProfile } from '../Authorization/redux';
import { WrapperStyled } from './Main.styles';


export interface MainPageProps {
  children: JSX.Element | JSX.Element[];
}

export function MainPage({ children }: MainPageProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserProfile);

  useEffect(() => {
    if(!user) {
      dispatch(userProfile());
    }
  }, [user, dispatch]);

  const userRoleNavigation = user?.role_name === 'Patient' ? PATIENT_VIEW_PATH : DOCTOR_VIEW_PATH;


  return (
    <WrapperStyled>
      {user ? 
      <Header path={userRoleNavigation} name={`${user?.first_name} ${user?.last_name}`} position={`${user?.role_name}`} avatar={`${user?.photo}`}/> 
      : null}
      {children}
    </WrapperStyled>
  );
}
