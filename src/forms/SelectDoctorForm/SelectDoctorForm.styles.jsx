import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import { Button, StyledWarningText } from '../../components';

export const StyledSectionContainer = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const StyledWrapper = styled.div`
  display:flex;
  flex-direction: raw;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledAppointmentsForm = styled(Form)`
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

export const StyledRadioWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 464px;
`;

export const StyledFields = styled(Field)`
    position: relative;
    width: 624px;
    height: 56px;
    margin-bottom: 40px;
    padding: 0 24px;
    font-size: 17px;
    line-height: 24px;
    border: 1px solid #DCE0EC;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    &:focus {
        border: 1px solid #7297FF;
    }
`;

export const StyledLabel = styled.label`
  margin-bottom: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: black;  
`;

export const StyledWarnings = styled(StyledWarningText)`
  bottom: 14px;
`;
export const StyledWarningsTime = styled(StyledWarningText)`
  bottom: -17px;
  left: 23px;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButtonSubmit = styled(Button)`
  padding: 0;
  background: #7297FF;
  border: none;
  ${(props) => props.isDisabled && css`
    background: #d6ddf1;
    cursor: not-allowed;
    border: 1px solid gray;
  `}
`;
