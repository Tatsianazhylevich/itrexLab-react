import styled from 'styled-components';
import { Button } from '../../components';
import plusIcon from '../../assets/icons/plus.png';

export const StyledBoardTitle = styled.h2`
    display: flex;
    color: #202225;
    font-size: 24px;
    @media (max-width: 565px) {
      font-size: 20px;
    }
`;

export const StyledBoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const StyledContainer = styled.div`
  margin: 0 60px;
`;

export const CreateAnAppointmentBtn = styled(Button)`
  margin: 0;
  padding-left: 50px;
  width: 244px;
  background: url(${plusIcon}) no-repeat center left 20px, #7297FF;
  border: none;
`;
