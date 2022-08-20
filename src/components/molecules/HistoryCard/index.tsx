import React, { FC } from 'react';
import { Amount, Container, Title } from './styles';

interface Props<T = string> {
  color: T;
  title: T;
  amount: T;
}

export const HistoryCard: FC<Props> = ({ color, title, amount }) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
};
