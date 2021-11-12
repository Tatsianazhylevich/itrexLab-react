import React from 'react';
import styled from 'styled-components';
import DateIcon from '../../../../assets/icons/clock-three.png';
import ReasonIcon from '../../../../assets/icons/reason.png';

export function CardMain({
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

const StyledCardMain = styled.div`
     display: flex;
    flex-direction: column;
    margin: 55px 0px 40px;
`;
const StyledCardDate = styled.div`
    display: flex;
`;
const StyledDateIcon = styled.div`
    width: 24px;
    height: 24px;
    background: url(${DateIcon}) no-repeat center;
`;

const DateText = styled.p`
    margin-left: 15px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: #202225;
`;
const StyledCardNote = styled.div`
    display: flex;
     margin-top: 15px;
`;
const StyledNoteIcon = styled.div`
    width: 24px;
    height: 24px;
    background: url(${ReasonIcon}) no-repeat center;
`;

const NoteText = styled.p`
    margin-left: 15px;
    font-family: Poppins;
    font-style: normal;
    font-size: 15px;
    line-height: 140%;
    color: #202225;
`;
