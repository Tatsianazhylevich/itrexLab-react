import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components';
import { userProfile, getUserProfile } from '../Authorization/redux';
import { WrapperStyled } from './Main.styles';

export interface MainPageProps {
  children: JSX.Element | JSX.Element[];
}

export function MainPage({ children }: MainPageProps) {
  const dispatch = useDispatch();
  const user = useSelector(getUserProfile);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <WrapperStyled>
      <Header name={`${user.first_name} ${user.last_name}`} position={`${user.role_name}`} avatar={`${user.photo}`}/>
      {children}
    </WrapperStyled>
  );
}
