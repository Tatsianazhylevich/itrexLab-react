import styled from 'styled-components';
import { breakpoints } from '../../theme';

export const BoardCardStyled = styled.section`
    margin-top: 56px;
    @media (max-width: ${breakpoints.mobileL}) {
        margin-top: 45px;
    }
    
`;
