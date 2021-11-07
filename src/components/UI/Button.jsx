import React from 'react';
import styled from 'styled-components';
import arrowRightIcon from '../../assets/icons/angle-right-b.png';

export function Button({ ...props }) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 146px;
  height: 56px;
  margin: 44px 0 32px;
  border-radius: 8px;
  background: url(${arrowRightIcon}) no-repeat center right 20px, #7297FF;
  padding-right: 32px;
  color: #FFFFFF;
  cursor: pointer;
`;
