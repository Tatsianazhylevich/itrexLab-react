import React from 'react';
import {
  StyledCardMain,
  StyledDateIcon,
  StyledCardDate,
  DateText,
  StyledCardNote,
  StyledNoteIcon,
  NoteText,
} from './PatientCard.styles';

export function PatientCardMain({
  time, description,
}) {
  return (
    <StyledCardMain>
      <StyledCardDate>
        <StyledDateIcon />
        <DateText>
          {time}
        </DateText>
      </StyledCardDate>
      <StyledCardNote>
        <StyledNoteIcon />
        <NoteText>
          {description}
        </NoteText>
      </StyledCardNote>
    </StyledCardMain>
  );
}
