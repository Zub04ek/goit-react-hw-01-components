import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 250px;
  border: 1px solid #afafaf;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
  background-color: #f8f8fa;

  svg {
    fill: ${props => {
      return props.isonline === 'true' ? 'green' : 'red';
    }};
  }
`;
