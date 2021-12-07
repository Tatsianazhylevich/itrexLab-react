import styled from 'styled-components';
import { breackpoints } from '../../theme';

export const LinkStyled = styled.a`
   margin-left: 20px;
   @media (max-width: ${breackpoints.tablet}) {
    margin: 0;
  }
`;
