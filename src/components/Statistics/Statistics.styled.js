import styled from 'styled-components';
export const StatisticList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Statistic = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Percentage = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${props =>
    props.children[1] >= 75
      ? 'green'
      : 'red' && props.children[1] >= 35
      ? 'orange'
      : 'red'};
`;
