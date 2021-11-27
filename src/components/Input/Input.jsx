import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import {
  StyledDiv, StyledLabel, StyledInput, PasswordControl,
} from './Input.styles';
import { StyledWarningText } from '../Text/WarningText';
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
