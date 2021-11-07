import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { WarningText } from './WarningText';
// import nameIcon from '../../assets/icons/user.png';
// import emailIcon from '../../assets/icons/Vector.png';
// import passwordIcon from '../../assets/icons/lock.png';
// import confirmIcon from '../../assets/icons/check.png';

export function Input({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <StyledInput
        className={props.name}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <WarningText className="error">{meta.error}</WarningText>
      ) : null}
    </div>
  );
}

const StyledInput = styled.input`
    width: 368px;
    height: 56px;
    margin: 20px 0;
    font-size: 17px;
    line-height: 24px;
    border: 1px solid #DCE0EC;
    border-radius: 8px;
    /* background: url({nameIcon}) no-repeat center left 20px;
    padding-left: 63px;
    background-color: #FFFFFF; */
    outline: none;
    cursor: pointer;
    &:focus {
        border: 1px solid #7297FF;
    }
`;
