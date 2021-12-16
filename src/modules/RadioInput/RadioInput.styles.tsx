import styled from 'styled-components';
import { colors } from '../../theme';
import { RadioInputProps, RadioLabelProps } from './RadioInput';

export const RadioLabelStyled = styled.label<RadioLabelProps>`
    display: flex;
    width: 104px;
    height: 40px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    background: ${colors.white};
    color: ${({ isSelected }) => (isSelected ? colors.blue : colors.black)};
    border: ${({ isSelected }) => (isSelected ? `1px solid ${colors.blue}` : 'none')};
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      border: 1px solid ${colors.blue};
    } 

`;

export const RadioInputStyled = styled.input`
    width: 0px;
`;
