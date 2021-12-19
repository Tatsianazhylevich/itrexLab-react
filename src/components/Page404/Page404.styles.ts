import styled from "styled-components";
import { colors } from "theme";
import Page404 from '../../assets/page404.jpg';


export const Img404Styled = styled.div`
    margin: 200px auto 0;
    width: 780px;
    height: 300px;
    background: url(${Page404});
`

export const Text404Styled = styled.p`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 90px;
    color: ${colors.mediumgrey};
    font-size: 24px;
`