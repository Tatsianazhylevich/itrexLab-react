import styled from 'styled-components';
import backgroud from '../../assets/bg.jpg';
import mobileBackground from '../../assets/bg-mobile.jpg';
import { breackpoints } from '../../theme';

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    background: url(${backgroud}) no-repeat;
    background-size: cover;
    @media (max-width: ${breackpoints.tablet}) {
      flex-direction: column;
      background: url(${mobileBackground}) no-repeat;
      background-size: contain;
    }
`;
