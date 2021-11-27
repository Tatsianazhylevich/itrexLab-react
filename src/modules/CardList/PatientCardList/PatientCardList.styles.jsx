import styled from 'styled-components';

export const StyledCardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-height: 680px;
    list-style-type: none;
    overflow-y: auto;
    @media(max-width: 1024px) {
        display: flex; 
        justify-content: center;
    }
`;
