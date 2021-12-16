import styled from 'styled-components';
import { Button } from '../../components';
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

export const CreateAnAppointmentBtn = styled(Button)`
  margin: 0;
  padding-left: 50px;
  width: 244px;
  background: url(${plusIcon}) no-repeat center left 20px, ${colors.blue};
  border: none;
`;
