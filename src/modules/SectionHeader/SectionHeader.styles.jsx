import styled from 'styled-components';
import { colors } from '../../theme';

export const ContainerStyled = styled.div`
    display: flex;
    margin-bottom: 40px;

`;

export const NumberStyled = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    border: 1px solid ${colors.mediumgrey};
    border-radius: 50%;
    font-size: 17px;
    line-height: 24px;
    color: ${colors.mediumgrey};
`;

export const TextStyled = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    line-height: 24px;
    color: ${colors.mediumgrey};
`;
