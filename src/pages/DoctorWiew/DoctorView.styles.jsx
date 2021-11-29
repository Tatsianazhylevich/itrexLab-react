import styled from 'styled-components';
import { BREACKPOINTS, COLORS } from '../../theme';

export const StyledWrapper = styled.div`
  position: relative;
    max-width: 1920px;
    height: 1024px;
    padding: 0 64px;
    background: ${COLORS.wrapperblue};
    @media (max-width: ${BREACKPOINTS.mobileL}) {
      padding: 0;
    }
`;

export const StyledMain = styled.div`
  padding: 40px 0 40px 48px;
  max-width: 1792px;
  height: 896px;
  background-color:${COLORS.greylight};
  box-shadow: 0px 4px 32px ${COLORS.darkgrey};
  border-radius: 16px;
  @media (max-width: ${BREACKPOINTS.mobileL}) {
      padding: 40px 24px;
    }
`;
