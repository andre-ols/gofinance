import { FC, useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  HighLightCards,
  Icon,
  LoadContainer,
  Photo,
  Title,
  TransactionList,
  Transactions,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from './styles';
import { HighLightCard } from '../../molecules/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../molecules/TransactionCard';
import transactionsStorage from '../../../utils/storage/transactions/transactionsStorage';
import { Transaction } from '../../../models/Transactions.model';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const formattedDate = (lastTransaction: Transaction) => {
  const { createdAt } = lastTransaction;
  return Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
  }).format(new Date(createdAt));
};

export const Dashboard: FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  const loadTransactions = async () => {
    const response = await transactionsStorage.findAll();
    const transactionsOrderByDate = response.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    setTransactions(transactionsOrderByDate);
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  const formattedTrasactions: DataListProps[] = transactions.map<DataListProps>((item) => ({
    amount: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      Number(item.amount),
    ),
    date: Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    }).format(new Date(item.createdAt)),
    name: item.name,
    categoryKey: item.category,
    type: item.type,
    id: item.id,
  }));

  const incomeTrasacaions = transactions.filter((item) => item.type === 'income');
  const outcomeTrasacaions = transactions.filter((item) => item.type === 'outcome');

  const amountIncome = incomeTrasacaions.reduce((acc, item) => {
    return acc + Number(item.amount);
  }, 0);

  const amountIncomeFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amountIncome);

  const amountOuncome = outcomeTrasacaions.reduce((acc, item) => {
    return acc + Number(item.amount);
  }, 0);

  const amountOuncomeFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amountOuncome);

  const amountTotal = amountIncome - amountOuncome;

  const amountTotalFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amountTotal);

  const lastTransactionIncome = incomeTrasacaions[0];

  const lastTransactionOutcome = outcomeTrasacaions[0];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQFnZ5ECKE8vNQ/profile-displayphoto-shrink_800_800/0/1614707358251?e=1665619200&v=beta&t=OgMsWf1ym_Z-rUt1ukHbNpvJFWysBDPhXlXPVHtRvmE',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>André</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard
          amount={amountIncomeFormatted}
          lastTransaction={
            lastTransactionIncome
              ? `Última entrada dia ${formattedDate(lastTransactionIncome)}`
              : 'Nenhuma transação'
          }
          title="Entradas"
          type="up"
        />
        <HighLightCard
          amount={amountOuncomeFormatted}
          lastTransaction={
            lastTransactionOutcome
              ? `Última saída dia ${formattedDate(lastTransactionOutcome)}`
              : 'Nenhuma transação'
          }
          title="Saídas"
          type="down"
        />
        <HighLightCard
          amount={amountTotalFormatted}
          lastTransaction={`01 a  ${Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'long',
          }).format(new Date())}`}
          title="Total"
          type="total"
        />
      </HighLightCards>

      <Transactions>
        <Title>LISTAGEM</Title>
        {isLoading ? (
          <LoadContainer>
            <ActivityIndicator color={theme.colors.primary} size="large" />
          </LoadContainer>
        ) : (
          <TransactionList
            data={formattedTrasactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TransactionCard data={item} />}
          />
        )}
      </Transactions>
    </Container>
  );
};
