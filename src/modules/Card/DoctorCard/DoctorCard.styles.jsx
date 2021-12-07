import styled from 'styled-components';
import DateIcon from '../../../assets/icons/clock-three.png';
import ReasonIcon from '../../../assets/icons/reason.png';
import { breackpoints, colors } from '../../../theme';

export const CardStyled = styled.li`
    width: 406px;
    height: 264px;
    margin-right: 20px;
    margin-bottom: 24px;
    padding: 24px 32px 40px;
    background: ${colors.white};
    box-shadow: 0px 4px 32px ${colors.darkgrey};
    border-radius: 12px;
    @media(max-width: ${breackpoints.laptop}) {
      width: 100%;
    }
`;

export const CardHeaderStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    ::before {
    position: absolute;
    top: 75px;
    right: -32px;
    content: '';
    background-color: ${colors.solidgrey};
    width: 406px;
    height: 1px;
    @media(max-width: ${breackpoints.laptop}) {
      right: 0px;
      width: 100%;;
    }
    }
`;
export const HeaderInfoStyled = styled.div`
    display: flex;
`;
export const AvatarStyled = styled.img`
    position: relative;
    width: 48px;
    height: 48px;
`;

export const HeaderAboutStyled = styled.div`
    margin: 11px 17px;
`;

export const NameStyled = styled.h4`
    margin-bottom: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
    color: ${colors.black};
`;

export const StatusText = styled.div`
    margin-left: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: ${colors.mediumgrey};
`;

export const More = styled.div`
    position: relative;
    width: 5px;
    height: 5px;
    background: ${colors.solidgrey};
    border-radius: 50%;
    
    &:before {
    position: absolute;
    content: '';
    top: 7px;
    width: 5px;
    height: 5px;
    background: ${colors.solidgrey};
    border-radius: 50%;
    }
    &:after {
    position: absolute;
    content: '';
    bottom: 7px;
    width: 5px;
    height: 5px;
    background: ${colors.solidgrey};
    border-radius: 50%;
    }
`;

export const CardMainStyled = styled.div`
     display: flex;
    flex-direction: column;
    margin: 55px 0px 40px;
`;
export const CardDateStyled = styled.div`
    display: flex;
`;
export const DateIconStyled = styled.div`
    width: 24px;
    height: 24px;
    background: url(${DateIcon}) no-repeat center;
`;

export const DateText = styled.p`
    margin-left: 15px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: ${colors.black};
`;
export const CardNoteStyled = styled.div`
    display: flex;
     margin-top: 15px;
`;
export const NoteIconStyled = styled.div`
    width: 24px;
    height: 24px;
    background: url(${ReasonIcon}) no-repeat center;
`;

export const NoteText = styled.p`
    margin-left: 15px;
    font-family: Poppins;
    font-style: normal;
    font-size: 15px;
    line-height: 140%;
    color: ${colors.black};
`;
export const PatientStatus = styled.div`
    display: flex
`;
