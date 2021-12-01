import styled from 'styled-components';
import DateIcon from '../../../assets/icons/clock-three.png';
import ReasonIcon from '../../../assets/icons/reason.png';
import { BREACKPOINTS, COLORS } from '../../../utils/theme';

export const CardStyles = styled.li`
    width: 406px;
    height: 264px;
    margin-right: 20px;
    margin-bottom: 24px;
    padding: 24px 32px 40px;
    background: ${COLORS.white};
    box-shadow: 0px 4px 32px ${COLORS.darkgrey};
    border-radius: 12px;
    @media(max-width: ${BREACKPOINTS.laptop}) {
      width: 100%;
    }
`;

export const CardHeaderStyles = styled.div`
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
    background-color: ${COLORS.solidgrey};
    width: 406px;
    height: 1px;
    @media(max-width: ${BREACKPOINTS.laptop}) {
      right: 0px;
      width: 100%;;
    }
    }
`;
export const HeaderInfoStyles = styled.div`
    display: flex;
`;
export const AvatarStyles = styled.img`
    position: relative;
    width: 48px;
    height: 48px;
`;

export const HeaderAboutStyles = styled.div`
    margin: 11px 17px;
`;

export const NameStyles = styled.h4`
    margin-bottom: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
    color: ${COLORS.black};
`;

export const StatusText = styled.div`
    margin-left: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: ${COLORS.mediumgrey};
`;

export const More = styled.div`
    position: relative;
    width: 5px;
    height: 5px;
    background: ${COLORS.solidgrey};
    border-radius: 50%;
    
    &:before {
    position: absolute;
    content: '';
    top: 7px;
    width: 5px;
    height: 5px;
    background: ${COLORS.solidgrey};
    border-radius: 50%;
    }
    &:after {
    position: absolute;
    content: '';
    bottom: 7px;
    width: 5px;
    height: 5px;
    background: ${COLORS.solidgrey};
    border-radius: 50%;
    }
`;

export const CardMainStyles = styled.div`
     display: flex;
    flex-direction: column;
    margin: 55px 0px 40px;
`;
export const CardDateStyles = styled.div`
    display: flex;
`;
export const DateIconStyles = styled.div`
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
    color: ${COLORS.black};
`;
export const CardNoteStyles = styled.div`
    display: flex;
     margin-top: 15px;
`;
export const NoteIconStyles = styled.div`
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
    color: ${COLORS.black};
`;
export const PatientStatus = styled.div`
    display: flex
`;
