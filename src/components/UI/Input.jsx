import React, { useState } from 'react';
import styled from 'styled-components';
import { ErrorMessage, useField } from 'formik';
import { StyledWarningText } from './WarningText';
import eye from '../../assets/icons/eye.png';
import eyeSlash from '../../assets/icons/eye-slash.png';

export const Input = ({
  label, isEyeVisible, fontSize, ...props
}) => {
  const [field] = useField(props);
  const [visible, setVisible] = useState(false);

  const changeVisibility = () => {
    setVisible(!visible);
  };

  return (
    <StyledDiv>
      <StyledLabel fontSize={fontSize} htmlFor={field.name}>{label}</StyledLabel>
      {isEyeVisible
        ? <StyledInput {...field} {...props} autoComplete="off" type={visible ? 'text' : 'password'} />
        : <StyledInput {...field} {...props} autoComplete="off" />}
      { isEyeVisible
        ? (<PasswordControl onClick={changeVisibility} src={visible ? eye : eyeSlash} />)
        : null}
      <ErrorMessage component={StyledWarningText} name={field.name} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
    width: 368px;
    height: 56px;
    margin: 0 0 40px 0;
    font-size: 17px;
    line-height: 24px;
    border: 1px solid #DCE0EC;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    &:focus {
        border: 1px solid #7297FF;
    }
    @media (max-width: 600px) {
      width: 100%;
      height: 40px;
      font-size: 15px;
      line-height: 140%;
      margin: 12px 0;
    }
`;

const StyledLabel = styled.label`
    font-size: ${(props) => props.fontSize}px;

`;

const PasswordControl = styled.img`
  position: absolute;
  right: 20px;
  top: 17px;
  width: 24px;
  @media (max-width: 600px) {
    top: 20px;
    right: 20px;
  }
    
`;
