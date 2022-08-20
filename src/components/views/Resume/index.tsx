import { useFocusEffect } from '@react-navigation/native';
import { FC, useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native';
import { Transaction } from '../../../models/Transactions.model';
import { categories } from '../../../utils/categories';
import { formatMoney } from '../../../utils/formatMoney';
import transactionsStorage from '../../../utils/storage/transactions/transactionsStorage';
import { HistoryCard } from '../../molecules/HistoryCard';
import {
  ChartContainer,
  Container,
  Content,
  Header,
  LoadingContainer,
  Month,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Title,
  TransactionList,
  Transactions,
} from './styles';

const groupTrasactionsByCategory = (transactions: Transaction[]) => {
  const outcomeTotal = transactions.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);

  return categories
    .map((category) => {
      const categoryTrasactions = transactions.filter(
        (transaction) => transaction.category === category.key,
      );

      const total = categoryTrasactions.reduce((acc, transaction) => {
        return acc + Number(transaction.amount);
      }, 0);
      return {
        category,
        total,
        percent: `${((total / outcomeTotal) * 100).toFixed(0)}%`,
      };
    })
    .filter((category) => category.total !== 0);
};

export const Resume: FC = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  function handleChangeDate(action: 'previous' | 'next') {
    if (action === 'next')
      setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)));
    else setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)));
  }

  const loadTransactionsGroupedByCategory = async () => {
    setIsLoading(true);
    const trasactions = await transactionsStorage.findAll();
    const filteredTransactions = trasactions.filter(
      (transaction) =>
        transaction.type === 'outcome' &&
        new Date(transaction.createdAt).getMonth() === selectedDate.getMonth() &&
        new Date(transaction.createdAt).getFullYear() === selectedDate.getFullYear(),
    );

    setTransactions(filteredTransactions);
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadTransactionsGroupedByCategory();
    }, [selectedDate]),
  );

  const transactionsGroupedByCategory = groupTrasactionsByCategory(transactions);

  return (
    <Container>
      <Header>
        <Title> Resumo por categoria </Title>
      </Header>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadingContainer>
      ) : (
        <Content>
          <MonthSelect>
            <MonthSelectButton onPress={() => handleChangeDate('previous')}>
              <MonthSelectIcon name="chevron-left" />
            </MonthSelectButton>
            <Month>
              {Intl.DateTimeFormat('pt-BR', {
                month: 'long',
                year: 'numeric',
              }).format(new Date(selectedDate))}
            </Month>
            <MonthSelectButton onPress={() => handleChangeDate('next')}>
              <MonthSelectIcon name="chevron-right" />
            </MonthSelectButton>
          </MonthSelect>

          <ChartContainer>
            <VictoryPie
              data={transactionsGroupedByCategory.map((item) => ({
                x: item.percent,
                y: item.total,
              }))}
              colorScale={transactionsGroupedByCategory.map((item) => item.category.color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  fill: theme.colors.shape,
                },
              }}
              labelRadius={50}
            />
          </ChartContainer>
          <Transactions>
            <TransactionList
              data={transactionsGroupedByCategory}
              keyExtractor={(item) => item.category.key}
              renderItem={({ item }) => (
                <HistoryCard
                  key={item.category.key}
                  color={item.category.color}
                  title={item.category.name}
                  amount={formatMoney(item.total, 'pt-BR', 'BRL')}
                />
              )}
            />
          </Transactions>
        </Content>
      )}
    </Container>
  );
};
