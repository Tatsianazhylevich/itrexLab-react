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
  padding: 12px 16px 12px 50px;
  max-width: 244px;
  background: url(${plusIcon}) no-repeat center left 20px, ${colors.blue};
  border: none;
  color: ${colors.white};
  font-size: 15px;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 123px;
    padding-left: 30px;
    background: url(${plusIcon}) no-repeat center left 10px, ${colors.blue};
    font-size: 12px;
  }
`;