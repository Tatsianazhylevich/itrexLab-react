import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Title } from '../../components/UI';
import arrowLeftIcon from '../../assets/icons/angle-left-b.png';
import { SIGN_IN_PATH } from '../../components';

export function RestoredPassword() {
  return (
    <Container>
      <StyledForm>
        <StyledTitle>
          <ArrowLink to={SIGN_IN_PATH} />
          <StyledTitleText>Restore Password</StyledTitleText>
        </StyledTitle>
        <RestorePasswordText>
          <p>
            An email has been sent to example@exam.com.
            Check your inbox, and click the reset link provided.

          </p>
        </RestorePasswordText>
      </StyledForm>
    </Container>
  );
}

const StyledForm = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      width: 560px;
      min-height: 100vh;
      padding: 0 95px 0;
      background-color: #F9FAFF;
      @media (max-width: 600px) {
      justify-content: flex-start;
        align-items: stretch;
        margin-top: 72px;
        width: 100%;
        padding: 0 5.5vh;
        border-radius: 24px 24px 0px 0px;
    }
`;
const ArrowLink = styled(Link)`
    width: 25px;
    background: url(${arrowLeftIcon}) no-repeat;
`;
const StyledTitle = styled(Title)`
     display: flex;
`;
const StyledTitleText = styled.p`
      margin-left: 16px;
`;
const RestorePasswordText = styled.div`
    width: 368px;
    height: 38px;
    margin-bottom: 395px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 130%; 
    color: #A1ABC9;
    @media (max-width: 600px) {
      width: 100%;
        height: 38px;
        font-size: 12px;
    }
`;
