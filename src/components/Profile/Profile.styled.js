import styled from '@emotion/styled';

export const Card = styled.div`
  width: 416px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Description = styled.div`
  text-align: center;
  padding: 30px;
  background-color: #f8f8fa;
  border-radius: 8px 8px 0px 0px;
`;

export const Image = styled.img`
  width: 200px;
  margin: auto;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 40px;
  font-weight: 600;
`;

export const UserInfo = styled.p`
  font-size: 20px;
  color: #afafaf;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  background-color: #e5e6eb;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  padding: 10px;
  border-top: 1px solid #afafaf;

  &:not(:last-child) {
    border-right: 1px solid #afafaf;
  }
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
