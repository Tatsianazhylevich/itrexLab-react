import React from 'react';
import {
  BoardHeaderStyled, BoardTitleStyled, CreateAnAppointmentBtn, ContainerStyled,
} from './BoardHeader.styles';
import { messages } from '../../shared';

interface BoardHeaderProps {
  title: string,
  getAppointment?: () => void,
  isBtnVisible?: boolean
}


export function BoardHeader({ title, getAppointment, isBtnVisible }: BoardHeaderProps) {
  return (
    <BoardHeaderStyled className="board_header card-header">
      <BoardTitleStyled>{title}</BoardTitleStyled>
      { isBtnVisible
        ? (
          <ContainerStyled>
            <CreateAnAppointmentBtn
              type='button'
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
