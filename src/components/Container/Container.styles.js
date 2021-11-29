import styled from 'styled-components';
import backgroud from '../../assets/bg.jpg';
import mobileBackground from '../../assets/bg-mobile.jpg';
import { BREACKPOINTS } from '../../theme';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    background: url(${backgroud}) no-repeat;
    @media (max-width: ${BREACKPOINTS.tablet}) {
      flex-direction: column;
      background: url(${mobileBackground}) no-repeat;
      background-size: contain;
    }
`;
