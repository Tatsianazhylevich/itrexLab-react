import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import { Button, WarningTextStyled } from '../../../../components';
import { breakpoints, colors } from '../../../../theme';

export const SectionContainerStyled = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const WrapperStyled = styled.div`
  display:flex;
  flex-direction: raw;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const AppointmentsFormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RadioWrapperStyled = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 464px;
`;

export const FieldsStyled = styled(Field)`
    position: relative;
    width: 624px;
    height: 56px;
    margin-bottom: 40px;
    padding: 0 24px;
    font-size: 15px;
    line-height: 24px;
    border: 1px solid ${colors.solidgrey};
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    &:focus {
        border: 1px solid ${colors.blue};
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
`;

export const LabelStyled = styled.label`
  margin-bottom: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: ${colors.black};  
`;

export const WarningsStyled = styled(WarningTextStyled)`
  bottom: 14px;
`;
export const WarningsTimeStyled = styled(WarningTextStyled)`
  bottom: -17px;
  left: 23px;
`;
export const ButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonSubmitStyled = styled(Button)`
  margin-right: 20px;
  padding: 0;
  background: ${colors.blue};
  border: none;
  ${(props) => props.isDisabled && css`
    background:  ${colors.solidgrey};
    cursor: not-allowed;
    border: 1px solid gray;
  `}
`;
