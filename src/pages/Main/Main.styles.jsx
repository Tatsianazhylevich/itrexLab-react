import styled from 'styled-components';
import { breakpoints, colors } from '../../theme';

export const WrapperStyled = styled.div`
  position: relative;
  max-width: 1920px;
  padding: 0 64px 48px;
  background: ${colors.wrapperblue};
  @media (max-width:${breakpoints.mobileL}) {
    padding: 0;
  }
`;
