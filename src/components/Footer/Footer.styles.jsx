import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breackpoints } from '../../theme';

export const FooterStyled = styled.div`
    display: flex;
    margin-top: 70px;
    @media (max-width: ${breackpoints.tablet}) {
      display: flex;
      flex-direction: column;
      margin-top: 48px;
    }
`;

export const FooterTextStyled = styled.span`
    margin-right: 20px;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
    color: #A1ABC9;
`;

export const FooterLinkStyled = styled(Link)`
 @media (max-width: ${breackpoints.tablet}) {
    margin: 0;
  }
`;
