import styled, { css } from 'styled-components';
import arrowRightIcon from '../../assets/icons/angle-right-b.png';
import { breakpoints, colors } from '../../theme';
import { ButtonProps } from './Button';

export const ButtonStyled = styled.button<ButtonProps>`
  min-width: 146px;
  margin: 34px 0px;
  padding: 15px 0px 15px 15px;
  border-radius: 8px;
  background: url(${arrowRightIcon}) no-repeat center right 15px, ${colors.blue};
  padding-right: 32px;
  color: ${colors.white};
  font-size: 17px;
  cursor: pointer;
  ${(props) => props.isDisabled && css`
    background:  ${colors.solidgrey};
    cursor: not-allowed;
    border: 1px solid gray;
  `}

  @media (max-width: ${breakpoints.tablet}) {
    width: 123px;
    height: 46px;
    margin-top: 20px;
    background: url(${arrowRightIcon}) no-repeat center right 16px, ${colors.blue};
    padding-right: 30px;
  }

  ${(props) => props
    .type === 'submit' && css`
      margin-right: 30px;
  `}
`;

