import styled from 'styled-components';
import { BREACKPOINTS, COLORS } from '../../theme';

export const TitleStyles = styled.div`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  color: ${COLORS.black};
  @media (max-width: ${BREACKPOINTS.tablet}) {
    margin-top: 6vh;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
  }
`;
