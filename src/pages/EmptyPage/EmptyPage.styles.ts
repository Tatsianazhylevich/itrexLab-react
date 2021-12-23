import styled from "styled-components";
import medicalCard from '../../assets/icons/medical-history.png';
import { colors } from "theme";

export const EmptyPageContainer = styled.div`
    margin: 200px auto;
    display: flex;
    flex-direction: column;
`

export const EmptyPageImg = styled.div`
    margin: auto;
    height: 120px;
    width: 120px;
    background: url(${medicalCard}) center / 100%  no-repeat;
`;

export const EmptyPageText = styled.div`
    margin-top: 40px;
    color: ${colors.mediumgrey};
    font-size: 15px;
    text-align: center;
`;