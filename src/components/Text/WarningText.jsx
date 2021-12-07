import styled from 'styled-components';
import { colors } from '../../theme';

export const WarningTextStyled = styled.p`
    position: absolute;
    bottom: 15px;
    max-width: 368px;
    font-size: 13px;
    letter-spacing: -0.24px;
    color: ${colors.red};
`;
