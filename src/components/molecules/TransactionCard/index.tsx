import { FC } from 'react';
import { Container, Title, Amount, Footer, Category, CategoryName, Date, Icon } from './styles';

interface CategoryProps {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  date: string;
  category: CategoryProps;
}

interface Props {
  data: TransactionCardProps;
}

export const TransactionCard: FC<Props> = ({ data: { amount, category, title, date, type } }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === 'negative' && '- '}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};
