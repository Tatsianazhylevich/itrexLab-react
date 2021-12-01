import styled from 'styled-components';
import { BREACKPOINTS } from '../../theme';

export const LinkStyles = styled.a`
   margin-left: 20px;
   @media (max-width: ${BREACKPOINTS.tablet}) {
    margin: 0;
  }
`;
