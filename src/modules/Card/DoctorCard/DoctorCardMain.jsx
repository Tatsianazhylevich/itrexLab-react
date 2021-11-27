import React from 'react';
import {
  StyledCardMain,
  StyledCardDate,
  StyledDateIcon,
  DateText,
  StyledCardNote,
  StyledNoteIcon,
  NoteText,
} from './DoctorCard.styles';

export function DoctorCardMain({
  time, reason,
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
          {reason}
        </NoteText>
      </StyledCardNote>
    </StyledCardMain>
  );
}
