import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import { Button, WarningTextStyles } from '../../components';
import { BREACKPOINTS, COLORS } from '../../theme';

export const SectionContainerStyles = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const WrapperStyles = styled.div`
  display:flex;
  flex-direction: raw;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const AppointmentsFormStyles = styled(Form)`
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

export const RadioWrapperStyles = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 464px;
`;

export const FieldsStyles = styled(Field)`
    position: relative;
    width: 624px;
    height: 56px;
    margin-bottom: 40px;
    padding: 0 24px;
    font-size: 17px;
    line-height: 24px;
    border: 1px solid ${COLORS.solidgrey};
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    &:focus {
        border: 1px solid ${COLORS.blue};
    }
`;

export const LabelStyles = styled.label`
  margin-bottom: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: ${COLORS.black};  
`;

export const WarningsStyles = styled(WarningTextStyles)`
  bottom: 14px;
`;
export const WarningsTimeStyles = styled(WarningTextStyles)`
  bottom: -17px;
  left: 23px;
`;
export const ButtonWrapperStyles = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonSubmitStyles = styled(Button)`
  padding: 0;
  background: ${COLORS.blue};
  border: none;
  ${(props) => props.isDisabled && css`
    background:  ${COLORS.solidgrey};
    cursor: not-allowed;
    border: 1px solid gray;
  `}
`;
