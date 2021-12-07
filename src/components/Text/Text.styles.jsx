import styled from 'styled-components';
import { breackpoints, colors } from '../../theme';

export const TitleStyled = styled.div`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  color: ${colors.black};
  @media (max-width: ${breackpoints.tablet}) {
    margin-top: 32px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;
