import styled from 'styled-components';
import backgroud from '../../assets/bg.jpg';
import mobileBackground from '../../assets/bg-mobile.jpg';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    background: url(${backgroud}) no-repeat;
    @media (max-width: 600px) {
      flex-direction: column;
      background: url(${mobileBackground}) no-repeat;
      background-size: contain;
    }
`;
