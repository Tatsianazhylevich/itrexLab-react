import styled from 'styled-components';
import DateIcon from '../../../assets/icons/clock-three.png';
import NoteIcon from '../../../assets/icons/clipboard-blank.png';
import { BREACKPOINTS, COLORS } from '../../../theme';

export const StyledCard = styled.li`
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

export const StyledCardHeader = styled.div`
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
export const StyledHeaderInfo = styled.div`
    display: flex;
`;
export const StyledAvatar = styled.img`
    position: relative;
    width: 48px;
    height: 48px;
`;

export const StyledHeaderAbout = styled.div`
    margin: 11px 17px;
`;

export const StyledName = styled.h4`
    margin-bottom: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
    color: ${COLORS.black};
`;

export const Status = styled.div`
    width: 12px;
    height: 12px;
    background: ${COLORS.aqua};
    border: 3px solid ${COLORS.dirtywhite};
    border-radius: 50%;
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

export const StyledCardMain = styled.div`
     display: flex;
    flex-direction: column;
    margin: 55px 0px 40px;
`;
export const StyledCardDate = styled.div`
    display: flex;
`;
export const StyledDateIcon = styled.div`
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
export const StyledCardNote = styled.div`
    display: flex;
     margin-top: 15px;
`;
export const StyledNoteIcon = styled.div`
    width: 69px;
    height: 24px;
    background: url(${NoteIcon}) no-repeat center;
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
