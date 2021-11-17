import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components';
import plusIcon from '../../assets/icons/plus.png';

export function BoardHeader({ title, getAppointment, isBtnVisible }) {
  return (
    <StyledBoardHeader className="board_header card-header">
      <StyledBoardTitle>{title}</StyledBoardTitle>
      { isBtnVisible
        ? (
          <StyledContainer>
            <CreateAnAppointmentBtn
              onClick={getAppointment}
            >
              Create an appointment
            </CreateAnAppointmentBtn>
          </StyledContainer>
        )
        : null}
    </StyledBoardHeader>
  );
}

const StyledBoardTitle = styled.h2`
    display: flex;
    color: #202225;
    font-size: 24px;
    @media (max-width: 565px) {
      font-size: 20px;
    }
`;

const StyledBoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const StyledContainer = styled.div`
  margin: 0 60px;
`;

const CreateAnAppointmentBtn = styled(Button)`
  margin: 0;
  padding-left: 50px;
  width: 244px;
  background: url(${plusIcon}) no-repeat center left 20px, #7297FF;
  border: none;
`;
