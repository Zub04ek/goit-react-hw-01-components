import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/GetRandomColor';

export const List = styled.ul`
  display: flex;
  width: 416px;
  border-radius: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: calc(100% / 5);
  padding: 20px 0px;
  color: #f8f8fa;
  background-color: ${() => {
    return getRandomHexColor();
  }};
  &:first-of-type {
    border-radius: 8px 0px 0px 8px;
  }
  &:last-child {
    border-radius: 0px 8px 8px 0px;
  }
`;

export const Format = styled.span`
  font-size: 16px;
`;

export const Percent = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
