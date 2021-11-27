import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    
`;

export const StyledMenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    @media (max-width: 565px) {
      display: flex;
    }
`;

export const StyledMenuItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    margin-right: 10px;
    border-radius: 8px;
    border: none;
    filter: drop-shadow(0px 4px 32px rgba(218, 228, 255, 0.24));
    background: ${(props) => (props.isActive ? '#7297FF' : '#ffffff')};
    color: ${(props) => (props.isActive ? '#ffffff' : '#7297FF')};
    :first-child {
      @media (max-width: 565px) {
        margin-right: 24px;
      }
    }
    @media (max-width: 565px) {
        width: 120px;
        margin: 0px;
    }
`;
