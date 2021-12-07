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

export function DoctorCardMain({
  time, reason,
}) {
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
