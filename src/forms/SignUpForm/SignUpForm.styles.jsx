import styled from 'styled-components';
import { Form } from 'formik';
import { Input } from '../../components';
import nameIcon from '../../assets/icons/user.png';
import emailIcon from '../../assets/icons/Vector.png';
import passwordIcon from '../../assets/icons/lock.png';
import confirmIcon from '../../assets/icons/check.png';
import { BREACKPOINTS, COLORS } from '../../utils/theme';

export const FormStyles = styled(Form)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 560px;
    min-height: 100vh;
    padding: 172px 95px;
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

export const InputName = styled(Input)`
    background: url(${nameIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: ${COLORS.white};
    @media (max-width: ${BREACKPOINTS.tablet}) {
      background: url(${nameIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: ${COLORS.white};
    }

`;
export const InputEmail = styled(Input)`
    background: url(${emailIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: ${COLORS.white};
    @media (max-width: ${BREACKPOINTS.tablet}) {
      background: url(${emailIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: ${COLORS.white};
    }
`;
export const InputPassword = styled(Input)`
    position: relative;
    background: url(${passwordIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: ${COLORS.white};
    @media (max-width: ${BREACKPOINTS.tablet}) {
      background: url(${passwordIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: ${COLORS.white};
    }
`;

export const InputConfirmPassword = styled(Input)`
    position: relative;
    background: url(${confirmIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: ${COLORS.white};
    @media (max-width: ${BREACKPOINTS.tablet}) {
      background: url(${confirmIcon}) no-repeat center left 15px;
      padding-left: 48px;
      background-color: ${COLORS.white};
    }
`;
