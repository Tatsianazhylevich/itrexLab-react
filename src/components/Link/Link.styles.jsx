import styled from 'styled-components';
import { breakpoints } from '../../theme';

export const LinkStyled = styled.a`
   margin-left: 20px;
   @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`;
