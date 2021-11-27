import styled from 'styled-components';
import arrowRightIcon from '../../assets/icons/angle-right-b.png';

export const StyledButton = styled.button`
  width: 146px;
  height: 56px;
  margin: 44px 0 32px;
  border-radius: 8px;
  background: url(${arrowRightIcon}) no-repeat center right 20px, #7297FF;
  padding-right: 32px;
  color: #FFFFFF;
  font-size: 17px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 123px;
    height: 46px;
    margin-top: 20px;
    background: url(${arrowRightIcon}) no-repeat center right 16px, #7297FF;
    padding-right: 30px;
  }
`;
