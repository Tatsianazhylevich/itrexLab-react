import React from 'react';
import {

  CardDateStyled,
  DateIconStyled,
  DateText,
  CardNoteStyled,
  NoteIconStyled,
  NoteText,
  CardMainStyled,
} from './DoctorCard.styles';
import { CardProps } from '../Card.types'

export function DoctorCardMain({
  time, reason,
}: CardProps): JSX.Element {
  return (
    <CardMainStyled>
      <CardDateStyled>
        <DateIconStyled />
        <DateText>
          {time}
        </DateText>
      </CardDateStyled>
      <CardNoteStyled>
        <NoteIconStyled />
        <NoteText>
          {reason}
        </NoteText>
      </CardNoteStyled>
    </CardMainStyled>
  );
}
