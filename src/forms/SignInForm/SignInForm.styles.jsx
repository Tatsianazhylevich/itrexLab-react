import styled from 'styled-components';
import { Form } from 'formik';
import { Input } from '../../components';
import emailIcon from '../../assets/icons/Vector.png';
import passwordIcon from '../../assets/icons/lock.png';
import { breackpoints, colors } from '../../theme';

export const FormStyled = styled(Form)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 560px;
    min-height: 100vh;
    padding: 0 95px;
    background-color: ${colors.greylight};
    @media (max-width: ${breackpoints.tablet}) {
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
    background-color: ${colors.white};
    @media (max-width: ${breackpoints.tablet}) {
      background: url(${emailIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: ${colors.white};
    }
`;
export const InputPassword = styled(Input)`
    position: relative;
    background: url(${passwordIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: ${colors.white};
    @media (max-width: ${breackpoints.tablet}) {
      background: url(${passwordIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: ${colors.white};
    }
`;
