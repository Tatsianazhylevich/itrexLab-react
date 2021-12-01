import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import {
  DivStyles, LabelStyles, InputStyles, PasswordControl,
} from './Input.styles';
import { WarningTextStyles } from '../Text/WarningText';
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
    <DivStyles>
      <LabelStyles fontSize={fontSize} htmlFor={field.name}>{label}</LabelStyles>
      {isEyeVisible
        ? <InputStyles {...field} {...props} autoComplete="off" type={visible ? 'text' : 'password'} />
        : <InputStyles {...field} {...props} autoComplete="off" />}
      { isEyeVisible
        ? (<PasswordControl onClick={changeVisibility} src={visible ? eye : eyeSlash} />)
        : null}
      <ErrorMessage component={WarningTextStyles} name={field.name} />
    </DivStyles>
  );
};
