import React from 'react';
import {
  StyledBoardHeader, StyledBoardTitle, CreateAnAppointmentBtn, StyledContainer,
} from './BoardHeader.styles';

export function BoardHeader({ title, getAppointment, isBtnVisible }) {
  return (
    <StyledBoardHeader className="board_header card-header">
      <StyledBoardTitle>{title}</StyledBoardTitle>
      { isBtnVisible
        ? (
          <StyledContainer>
            <CreateAnAppointmentBtn
              onClick={getAppointment}
            >
              Create an appointment
            </CreateAnAppointmentBtn>
          </StyledContainer>
        )
        : null}
    </StyledBoardHeader>
  );
}
