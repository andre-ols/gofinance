import { FC } from 'react';
import { Transaction } from '../../../models/Transactions.model';
import { categories } from '../../../utils/categories';
import { Container, Title, Amount, Footer, Category, CategoryName, Date, Icon } from './styles';

export interface TransactionCardProps {
  type: Transaction['type'];
  name: string;
  amount: string;
  date: string;
  categoryKey: string;
}

interface Props {
  data: TransactionCardProps;
}

export const TransactionCard: FC<Props> = ({
  data: { amount, categoryKey, name: title, date, type },
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === 'outcome' && '- '}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={categories.find((category) => category.key === categoryKey)?.icon} />
          <CategoryName>
            {categories.find((category) => category.key === categoryKey)?.name}
          </CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};
