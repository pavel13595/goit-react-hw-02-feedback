import styled from 'styled-components';

export const ButtonList = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: flex;
  text-transform: uppercase;
  font-size: 18px;
  padding: 8px;
  border-radius: 10px;
  border: 3px solid #326da8;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 0 7px #666;
  :hover {
    background-color: #326da8;
    transition: all 0.2s ease-in-out 0s;
  }
  :active {
    transform: translateY(4px);
    transition: all 0.1s ease-in-out 0s;
    border: 3px solid #326de1;
    background-color: ${props =>
      props.name === 'good'
        ? 'green'
        : 'red' && props.name === 'neutral'
        ? 'orange'
        : 'red'};
  }
`;
