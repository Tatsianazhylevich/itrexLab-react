import styled from 'styled-components';
import { COLORS } from '../../utils/theme';

export const ContainerStyles = styled.div`
    display: flex;
    margin-bottom: 40px;

`;

export const NumberStyles = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    border: 1px solid ${COLORS.mediumgrey};
    border-radius: 50%;
    font-size: 17px;
    line-height: 24px;
    color: ${COLORS.mediumgrey};
`;

export const TextStyles = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    line-height: 24px;
    color: ${COLORS.mediumgrey};
`;
