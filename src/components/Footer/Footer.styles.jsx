import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BREACKPOINTS } from '../../theme';

export const StyledFooter = styled.div`
    display: flex;
    margin-top: 70px;
    @media (max-width: ${BREACKPOINTS.tablet}) {
      display: flex;
      flex-direction: column;
      margin-top: 48px;
    }
`;

export const StyledFooterText = styled.span`
    margin-right: 20px;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
    color: #A1ABC9;
`;

export const StyledFooterLink = styled(Link)`
 @media (max-width: ${BREACKPOINTS.tablet}) {
    margin: 0;
  }
`;
