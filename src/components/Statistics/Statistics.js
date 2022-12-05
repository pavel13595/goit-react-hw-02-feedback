import PropTypes from 'prop-types';
import { Statistic, StatisticList, Percentage } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <StatisticList>
      <Statistic>Good: {good}</Statistic>
      <Statistic>Neutral: {neutral}</Statistic>
      <Statistic>Bad: {bad}</Statistic>
      <Statistic>Total: {total}</Statistic>
      <Percentage>Positive Feedback: {percentage}%</Percentage>
    </StatisticList>
  );
};

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
