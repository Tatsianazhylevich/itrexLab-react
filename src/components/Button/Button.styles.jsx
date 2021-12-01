import styled from 'styled-components';
import arrowRightIcon from '../../assets/icons/angle-right-b.png';
import { breackpoints, colors } from '../../theme';

export const ButtonStyled = styled.button`
  width: 146px;
  height: 56px;
  margin: 44px 0 32px;
  border-radius: 8px;
  background: url(${arrowRightIcon}) no-repeat center right 20px, ${colors.blue};
  padding-right: 32px;
  color: ${colors.white};
  font-size: 17px;
  cursor: pointer;
  @media (max-width: ${breackpoints.tablet}) {
    width: 123px;
    height: 46px;
    margin-top: 20px;
    background: url(${arrowRightIcon}) no-repeat center right 16px, ${colors.blue};
    padding-right: 30px;
  }
`;
