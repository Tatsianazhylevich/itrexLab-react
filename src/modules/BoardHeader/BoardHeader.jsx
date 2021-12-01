import React from 'react';
import {
  BoardHeaderStyles, BoardTitleStyles, CreateAnAppointmentBtn, ContainerStyles,
} from './BoardHeader.styles';
import { MESSAGES } from '../../theme';

export function BoardHeader({ title, getAppointment, isBtnVisible }) {
  return (
    <BoardHeaderStyles className="board_header card-header">
      <BoardTitleStyles>{title}</BoardTitleStyles>
      { isBtnVisible
        ? (
          <ContainerStyles>
            <CreateAnAppointmentBtn
              onClick={getAppointment}
            >
              {MESSAGES.createAnAppointment}
            </CreateAnAppointmentBtn>
          </ContainerStyles>
        )
        : null}
    </BoardHeaderStyles>
  );
}
