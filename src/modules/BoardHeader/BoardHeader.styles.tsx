import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import plusIcon from '../../assets/icons/plus.png';
import { breakpoints, colors } from '../../theme';

export const BoardTitleStyled = styled.h2`
  display: flex;
  color: ${colors.black};
  font-size: 24px;
  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 20px;
  }
`;

export const BoardHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const ContainerStyled = styled.div`
  margin: 0 60px;
`;

export const CreateAnAppointmentBtn = styled.button`
  margin: 0;
  border-radius: 8px;
  padding-left: 50px;
  width: 244px;
  background: url(${plusIcon}) no-repeat center left 20px, ${colors.blue};
  border: none;
  padding-right: 32px;
  color: ${colors.white};
  font-size: 17px;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    width: 123px;
    height: 46px;
    margin-top: 20px;
    background: url(${plusIcon}) no-repeat center right 16px, ${colors.blue};
    padding-right: 30px;
  }
`;