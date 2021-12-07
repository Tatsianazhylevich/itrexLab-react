import styled from 'styled-components';
import { breackpoints, colors } from '../../theme';

export const InputStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputInnerStyled = styled.input`
    width: 368px;
    height: 56px;
    margin: 0 0 40px 0;
    font-size: 17px;
    line-height: 24px;
    border: 1px solid ${colors.mediumgrey};
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    &:focus {
        border: 1px solid ${colors.blue};
    }
    @media (max-width: ${breackpoints.tablet}) {
      width: 100%;
      height: 40px;
      font-size: 15px;
      line-height: 140%;
      margin: 12px 0;
    }
`;

export const InputLabelStyled = styled.label`
    font-size: ${(props) => props.fontSize}px;

`;

export const PasswordControl = styled.img`
  position: absolute;
  right: 20px;
  top: 17px;
  width: 24px;
  @media (max-width: ${breackpoints.tablet}) {
    top: 20px;
    right: 20px;
  }   
`;
