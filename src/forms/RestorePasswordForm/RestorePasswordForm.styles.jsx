import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import { Button, Input, Title } from '../../components';
import arrowLeftIcon from '../../assets/icons/angle-left-b.png';
import emailIcon from '../../assets/icons/Vector.png';
import { BREACKPOINTS, COLORS } from '../../theme';

export const StyledForm = styled(Form)`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      width: 560px;
      min-height: 100vh;
      padding: 178px 95px 0;
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

export const InputEmail = styled(Input)`
    background: url(${emailIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF;
    @media (max-width: ${BREACKPOINTS.tablet}) {
      background: url(${emailIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: #FFFFFF;
    }
`;

export const ArrowLink = styled(Link)`
    width: 25px;
    background: url(${arrowLeftIcon}) no-repeat;
`;

export const StyledTitle = styled(Title)`
     display: flex;
     margin: 0;
`;
export const StyledTitleText = styled.p`
      margin-left: 16px;
`;
export const RestorePasswordText = styled.div`
    width: 368px;
    height: 38px;
    margin: 32px 0 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 130%; 
    color: #A1ABC9;
`;
export const StyledButtonForRestored = styled(Button)`
      width: 214px;
      margin: 0px 0 350px;
`;
