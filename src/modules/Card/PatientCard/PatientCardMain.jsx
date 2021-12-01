import React from 'react';
import {
  CardMainStyled,
  DateIconStyled,
  CardDateStyled,
  DateText,
  CardNoteStyled,
  NoteIconStyled,
  NoteText,
} from './PatientCard.styles';

export function PatientCardMain({
  time, description,
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
          {description}
        </NoteText>
      </CardNoteStyled>
    </CardMainStyled>
  );
}
