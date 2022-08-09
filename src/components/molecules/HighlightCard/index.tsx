import { FC, PropsWithChildren } from 'react';
import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  CardType,
  LastTransaction,
  Title,
} from './styles';

export interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: CardType['type'];
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

export const HighLightCard: FC<PropsWithChildren<Props>> = ({
  amount,
  lastTransaction,
  title,
  type,
}) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon type={type} name={icon[type]} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};
