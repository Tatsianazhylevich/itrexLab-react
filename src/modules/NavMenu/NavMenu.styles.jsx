import styled from 'styled-components';
import { breackpoints, colors } from '../../theme';

export const MenuStyled = styled.nav`
    display: flex;
    
`;

export const MenuContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    @media (max-width: ${breackpoints.mobileL}) {
      display: flex;
    }
`;

export const MenuItemStyled = styled.button`
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
      @media (max-width:${breackpoints.mobileL}) {
        margin-right: 24px;
      }
    }
    @media (max-width: ${breackpoints.mobileL}) {
        width: 120px;
        margin: 0px;
    }
`;
