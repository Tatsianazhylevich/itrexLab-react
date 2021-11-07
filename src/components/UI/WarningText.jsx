import React from 'react';
import styled from 'styled-components';

export function WarningText(props, children) {
  return <StyledWarningText {...props} active>{children}</StyledWarningText>;
}

const StyledWarningText = styled.p`
    display: block;
    position: absolute;
    bottom: 5px;
    font-size: 13px;
    letter-spacing: -0.24px;
    color: #F6657F;
`;
