import { FC } from 'react';
import {
  Container,
  Header,
  HighLightCards,
  Icon,
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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard: FC = () => {
  const array: DataListProps[] = [
    {
      amount: 'R$ 10,00',
      date: '13/04/2022',
      title: 'Desenvolvimento de site',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      type: 'positive',
      id: '1',
    },
    {
      amount: 'R$ 50,00',
      date: '13/04/2022',
      title: 'Carilas',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      type: 'negative',
      id: '2',
    },
    {
      amount: 'R$ 10,00',
      date: '13/04/2022',
      title: 'Desenvolvimento de site',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      type: 'negative',
      id: '3',
    },
  ];
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
          amount="R$ 150,00"
          lastTransaction="Última entrada dia 13 de Abril"
          title="Entradas"
          type="up"
        />
        <HighLightCard
          amount="R$ 150,00"
          lastTransaction="Última entrada dia 13 de Abril"
          title="Saídas"
          type="down"
        />
        <HighLightCard
          amount="R$ 150,00"
          lastTransaction="Última entrada dia 13 de Abril"
          title="Total"
          type="total"
        />
      </HighLightCards>

      <Transactions>
        <Title>LISTAGEM</Title>
        <TransactionList
          data={array}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};
