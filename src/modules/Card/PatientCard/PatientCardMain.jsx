import React from 'react';
import {
  CardMainStyles,
  DateIconStyles,
  CardDateStyles,
  DateText,
  CardNoteStyles,
  NoteIconStyles,
  NoteText,
} from './PatientCard.styles';

export function PatientCardMain({
  time, description,
}) {
  return (
    <CardMainStyles>
      <CardDateStyles>
        <DateIconStyles />
        <DateText>
          {time}
        </DateText>
      </CardDateStyles>
      <CardNoteStyles>
        <NoteIconStyles />
        <NoteText>
          {description}
        </NoteText>
      </CardNoteStyles>
    </CardMainStyles>
  );
}
