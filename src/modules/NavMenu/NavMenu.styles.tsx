import styled from 'styled-components';
import { breakpoints, colors } from '../../theme';
import {ButtonProps} from '../../components/Button/Button'

export const MenuStyled = styled.nav`
    display: flex;
    
`;

export const MenuContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    @media (max-width: ${breakpoints.mobileL}) {
      display: flex;
    }
`;

export const MenuItemStyled = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    margin-right: 10px;
    border-radius: 8px;
    border: none;
    filter: drop-shadow(0px 4px 32px ${colors.darkgrey});
    background: ${(props) => (props.isActive ? colors.blue : colors.white)};
    color: ${(props) => (props.isActive ? colors.white : colors.blue)};
    :first-child {
      @media (max-width:${breakpoints.mobileL}) {
        margin-right: 24px;
      }
    }
    @media (max-width: ${breakpoints.mobileL}) {
        width: 120px;
        margin: 0px;
    }
`;
