import styled from '@emotion/styled';

export const Table = styled.table`
  width: 800px;
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const TableTitle = styled.th`
  color: #f8f8fa;
  text-transform: uppercase;
  border-bottom: 1px solid #afafaf;
  border-right: 1px solid #afafaf;
  font-size: 10px;
  padding: 10px;
  width: calc(100% / 3);
  background-color: #34a5b3;

  &:first-of-type {
    border-radius: 8px 0px 0px 0px;
  }

  &:last-child {
    border-right: 0px;
    border-radius: 0px 8px 0px 0px;
  }
`;

export const TableData = styled.td`
  text-align: center;
  border-bottom: 1px solid #afafaf;
  border-right: 1px solid #afafaf;
  font-size: 12px;
  padding: 10px;
  color: #364958;

  &:first-of-type {
    text-align: left;
    padding-left: 115px;
  }

  &:last-child {
    border-right: 0px;
  }
`;

export const TableRow = styled.tr`
  background-color: #f8f8fa;

  &:nth-of-type(2n) {
    background-color: #e5e6eb;
  }

  &:last-child {
    td {
      border-bottom: 0px;
      &:first-of-type {
        border-radius: 0px 0px 0px 8px;
      }

      &:last-child {
        border-right: 0px;
        border-radius: 0px 0px 8px 0px;
      }
    }
  }
`;
