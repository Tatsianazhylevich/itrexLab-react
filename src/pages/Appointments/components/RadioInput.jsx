import React from 'react';
import {
  useField,
} from 'formik';
import styled from 'styled-components';

export function RadioInput({ timeValue, selectedTime, ...props }) {
  const [field] = useField(props.field);
  return (
    <StyledRadioLabel isSelected={selectedTime === timeValue} htmlFor={`${timeValue}`}>
      <StyledRadioInput {...field} id={`${timeValue}`} type="radio" name="time" value={timeValue} />
      {timeValue}
    </StyledRadioLabel>
  );
}

const StyledRadioLabel = styled.label`
    display: flex;
    width: 104px;
    height: 40px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    background: '#F9FAFF';
    color: ${({ isSelected }) => (isSelected ? '#7297FF' : '#202225')};
    border: ${({ isSelected }) => (isSelected ? '1px solid #7297FF' : 'none')};
    box-sizing: border-box;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      border: 1px solid #7297FF;
    } 

`;

const StyledRadioInput = styled.input`
    width: 0px;
`;
