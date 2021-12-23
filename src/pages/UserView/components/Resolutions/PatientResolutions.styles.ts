import styled from "styled-components";
import { colors } from "theme";
export { EmptyPage } from 'pages';

export const ResolutionsTable = styled.table`
    margin-right: 34px; 
    border-collapse: separate;
    text-align: left;
    border-spacing: 0 4px;
    overflow-y: auto;
  
`;

export const ResolutionsTableRow = styled.tr`
    font-size: 17px;
    line-height: 24px;
    color: ${colors.black};
    background-color: white;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    &:last-child {
    border-bottom: none;
`;

export const ResolutionsTableHead = styled.tr`
    font-size: 15px;
    line-height: 24px;
    color: ${colors.mediumgrey};
    background-color: ${colors.white};
`;

export const ResolutionsTableCell = styled.td`
    padding: 10px 0;
    border-bottom: solid ${colors.greylight};
    background: ${colors.white};
    &:first-child {
        border-radius: 12px 0 0 12px;
        padding: 10px 0 10px 40px;
    }
    &:last-child {
        border-radius: 0 12px 12px 0;
        padding: 17px 40px 10px 0;
        display: flex;
        justify-content: flex-end;
    }
  `;

export const HeaderCell = styled(ResolutionsTableCell)`

  &:nth-child(1) {
    width: 18%;
  }

  &:nth-child(2) {
    width: 18%;
  }

  &:nth-child(3) {
    width: 33%;
  }

  &:nth-child(4) {
    width: 13%;
  }

  &:nth-child(5) {
    width: 14%;
  }

  &:nth-child(6) {
    padding: 10px 24px 10px 0;

  }
`;

export const More = styled.div`
    position: relative;
    width: 5px;
    height: 5px;
    background: ${colors.solidgrey};
    border-radius: 50%;
    cursor: pointed;
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