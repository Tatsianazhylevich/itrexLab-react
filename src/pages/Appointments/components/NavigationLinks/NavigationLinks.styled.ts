import styled from 'styled-components';
import { colors } from 'theme';
import arrow from '../../../../assets/icons/rightArrow.svg';

type NavigationLinksStyledProps = {
    isActive?: boolean;
}

export const NavigationLinksContainer = styled.div`
    display: flex;  
`;

export const ArrowStyled = styled.img`
    width: 24px;
    height: 24px;
    color: ${colors.mediumgrey};
`;

export const NavigationLinksStyled = styled.a<NavigationLinksStyledProps>`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 17px;
    line-height: 24px;
    text-decoration: none;
    color: ${({ isActive }): string =>
    isActive ? colors.mediumgrey : colors.blue};
`;
