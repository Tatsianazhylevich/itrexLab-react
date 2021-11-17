import React from 'react';
import styled from 'styled-components';
import { SelectDoctorForm } from '../../../components/forms';

export function SectionContainer() {
  return (
    <StyledSectionContainer>
      <SelectDoctorForm />
    </StyledSectionContainer>
  );
}

const StyledSectionContainer = styled.div`
    display: flex;
    margin: 10px 0;
`;
