import styled from 'styled-components';
import { COLORS } from '../../utils/theme';

export const WarningTextStyles = styled.p`
    position: absolute;
    bottom: 15px;
    max-width: 368px;
    font-size: 13px;
    letter-spacing: -0.24px;
    color: ${COLORS.red};
`;
