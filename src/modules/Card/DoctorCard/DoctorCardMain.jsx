import React from 'react';
import {
  CardMainStyles,
  CardDateStyles,
  DateIconStyles,
  DateText,
  CardNoteStyles,
  NoteIconStyles,
  NoteText,
} from './DoctorCard.styles';

export function DoctorCardMain({
  time, reason,
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
          {reason}
        </NoteText>
      </CardNoteStyles>
    </CardMainStyles>
  );
}
