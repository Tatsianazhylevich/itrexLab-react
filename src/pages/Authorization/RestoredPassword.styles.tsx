import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from '../../components';
import arrowLeftIcon from '../../assets/icons/angle-left-b.png';
import { breakpoints, colors } from '../../theme';

export const FormStyled = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      width: 560px;
      min-height: 100vh;
      padding: 0 95px 0;
      background-color: ${colors.greylight};
      @media (max-width: ${breakpoints.tablet}) {
      justify-content: flex-start;
        align-items: stretch;
        margin-top: 72px;
        width: 100%;
        padding: 0 5.5vh;
        border-radius: 24px 24px 0px 0px;
    }
`;
export const ArrowLink = styled(Link)`
    padding: 10px;
    background: url(${arrowLeftIcon}) no-repeat 100%;
`;
export const TitleStyled = styled.div`
    display: flex;
    margin-bottom: 40px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    color: ${colors.black};
    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 32px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
    }
`;
export const TitleTextStyled = styled.p`
      margin-left: 16px;
`;
export const RestorePasswordText = styled.div`
    width: 368px;
    margin-bottom: 395px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 130%; 
    color: ${colors.mediumgrey};
    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin-top: 24px;
    }
`;
