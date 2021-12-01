import styled from 'styled-components';
import { BREACKPOINTS } from '../../../theme';

export const CardListStyles = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-height: 680px;
    list-style-type: none;
    overflow-y: auto;
    @media(max-width: ${BREACKPOINTS.laptop}) {
        display: flex; 
        justify-content: center;
    }
`;
