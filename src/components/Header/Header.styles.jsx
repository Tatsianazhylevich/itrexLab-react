import styled from 'styled-components';
import avatar from '../../assets/doctors/mirandaNelson.png';
import { BREACKPOINTS, COLORS } from '../../theme';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    @media (max-width: ${BREACKPOINTS.mobileL}) {
      margin: 0 24px;
      padding: 16px 0;
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
     width: 29px;
        height: 32px;
        margin-right: 10px;
`;

export const LogoText = styled.h2`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
`;
export const HeaderUser = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderUserInfo = styled.div`
   display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 16px;
    @media (max-width: ${BREACKPOINTS.mobileL}) {
      display: none;
    }
`;

export const HeaderUserFoto = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    background: url(${avatar}) no-repeat;
`;

export const HeaderUserStatus = styled.div`
     position: absolute;
    right: 0px;
    width: 12px;
    height: 12px;
    background: ${COLORS.aqua};
    border: 3px solid ${COLORS.dirtywhite};
    border-radius: 50%;
`;

export const HeaderUserName = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: ${COLORS.black};
`;

export const HeaderUserProfession = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: ${COLORS.mediumgrey};
`;
