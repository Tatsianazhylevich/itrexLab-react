import React from 'react';
import {
  BoardHeaderStyled, BoardTitleStyled, CreateAnAppointmentBtn, ContainerStyled,
} from './BoardHeader.styles';
import { messages } from '../../shared';

export function BoardHeader({ title, getAppointment, isBtnVisible }) {
  return (
    <BoardHeaderStyled className="board_header card-header">
      <BoardTitleStyled>{title}</BoardTitleStyled>
      { isBtnVisible
        ? (
          <ContainerStyled>
            <CreateAnAppointmentBtn
              onClick={getAppointment}
            >
              {messages.createAnAppointment}
            </CreateAnAppointmentBtn>
          </ContainerStyled>
        )
        : null}
    </BoardHeaderStyled>
  );
}
