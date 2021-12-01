import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from '../../components';
import arrowLeftIcon from '../../assets/icons/angle-left-b.png';
import { BREACKPOINTS, COLORS } from '../../theme';

export const FormStyles = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      width: 560px;
      min-height: 100vh;
      padding: 0 95px 0;
      background-color: ${COLORS.greylight};
      @media (max-width: ${BREACKPOINTS.tablet}) {
      justify-content: flex-start;
        align-items: stretch;
        margin-top: 72px;
        width: 100%;
        padding: 0 5.5vh;
        border-radius: 24px 24px 0px 0px;
    }
`;
export const ArrowLink = styled(Link)`
    width: 25px;
    background: url(${arrowLeftIcon}) no-repeat;
`;
export const TitleStyles = styled(Title)`
     display: flex;
`;
export const TitleTextStyles = styled.p`
      margin-left: 16px;
`;
export const RestorePasswordText = styled.div`
    width: 368px;
    height: 38px;
    margin-bottom: 395px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 130%; 
    color: ${COLORS.mediumgrey};
    @media (max-width: ${BREACKPOINTS.tablet}) {
      width: 100%;
        height: 38px;
        font-size: 12px;
    }
`;
