import styled from 'styled-components';
import { COLORS } from '../../theme';

export const RadioLabelStyles = styled.label`
    display: flex;
    width: 104px;
    height: 40px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    background: ${COLORS.white};
    color: ${({ isSelected }) => (isSelected ? COLORS.blue : COLORS.black)};
    border: ${({ isSelected }) => (isSelected ? `1px solid ${COLORS.blue}` : 'none')};
    box-sizing: border-box;
    box-shadow: 0px 4px 32px ${COLORS.darkgrey};
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      border: 1px solid ${COLORS.blue};
    } 

`;

export const RadioInputStyles = styled.input`
    width: 0px;
`;
