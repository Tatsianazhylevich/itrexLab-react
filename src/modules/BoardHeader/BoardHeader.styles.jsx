import styled from 'styled-components';
import { Button } from '../../components';
import plusIcon from '../../assets/icons/plus.png';
import { BREACKPOINTS, COLORS } from '../../utils';

export const BoardTitleStyles = styled.h2`
    display: flex;
    color: ${COLORS.black};
    font-size: 24px;
    @media (max-width: ${BREACKPOINTS.mobileL}) {
      font-size: 20px;
    }
`;

export const BoardHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const ContainerStyles = styled.div`
  margin: 0 60px;
`;

export const CreateAnAppointmentBtn = styled(Button)`
  margin: 0;
  padding-left: 50px;
  width: 244px;
  background: url(${plusIcon}) no-repeat center left 20px, ${COLORS.blue};
  border: none;
`;
