import styled from 'styled-components';
import { BREACKPOINTS, COLORS } from '../../theme';

export const MenuStyles = styled.nav`
    display: flex;
    
`;

export const MenuContainerStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    @media (max-width: ${BREACKPOINTS.mobileL}) {
      display: flex;
    }
`;

export const MenuItemStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    margin-right: 10px;
    border-radius: 8px;
    border: none;
    filter: drop-shadow(0px 4px 32px ${COLORS.darkgrey});
    background: ${(props) => (props.isActive ? COLORS.blue : COLORS.white)};
    color: ${(props) => (props.isActive ? COLORS.white : COLORS.blue)};
    :first-child {
      @media (max-width:${BREACKPOINTS.mobileL}) {
        margin-right: 24px;
      }
    }
    @media (max-width: ${BREACKPOINTS.mobileL}) {
        width: 120px;
        margin: 0px;
    }
`;
