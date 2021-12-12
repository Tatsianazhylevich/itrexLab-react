import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import { Button, Input, Title } from '../../components';
import arrowLeftIcon from '../../assets/icons/angle-left-b.png';
import emailIcon from '../../assets/icons/Vector.png';
import { breakpoints, colors } from '../../theme';

export const FormStyled = styled(Form)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 560px;
    min-height: 100vh;
    padding: 178px 95px 0;
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

export const InputEmail = styled(Input)`
    margin-bottom: 64px;
    background: url(${emailIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: ${colors.white};
    @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 32px;
        background: url(${emailIcon}) no-repeat center left 15px;
        padding-left: 48px;
        background-color: ${colors.white};
    }
`;

export const ArrowLink = styled(Link)`
    width: 25px;
    background: url(${arrowLeftIcon}) no-repeat;
`;

export const TitleStyled = styled(Title)`
    display: flex;
    margin: 0;
    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 32px;
    }
`;
export const TitleTextStyled = styled.p`
    margin-left: 16px;
`;
export const RestorePasswordText = styled.div`
    width: 368px;
    margin: 32px 0 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 130%; 
    color: ${colors.mediumgrey};
    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin: 24px 0;
    }
`;
export const ButtonForRestoredStyled = styled(Button)`
      width: 214px;
      margin: 0;
`;
