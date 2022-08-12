import { FC, useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../molecules/Button';
import { CategorySelectButton } from '../../molecules/CategorySelectButton';
import { InputField } from '../../molecules/InputField';
import { TransactionTypeButton } from '../../molecules/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TransactionTypes } from './styles';

export const Register: FC = () => {
  const [category, setCategory] = useState({ key: 'category', name: 'Categoria' });
  const [transactionType, setTransactionType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function handleTransactionsTypeSelect(type: 'positive' | 'negative') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title> Cadastro </Title>
      </Header>

      <Form>
        <Fields>
          <InputField placeholder="Nome" />
          <InputField placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              type="up"
              title="Entrada"
              onPress={() => handleTransactionsTypeSelect('positive')}
              isActive={transactionType === 'positive'}
            />
            <TransactionTypeButton
              type="down"
              title="Saída"
              onPress={() => handleTransactionsTypeSelect('negative')}
              isActive={transactionType === 'negative'}
            />
          </TransactionTypes>

          <CategorySelectButton title={category.name} onPress={() => setModalVisible(true)} />
        </Fields>

        <Button title="Enviar" onPress={() => console.log('dads')} />
      </Form>

      <Modal visible={modalVisible} statusBarTranslucent>
        <CategorySelect
          category={category}
          closeSelectCategory={() => setModalVisible(false)}
          setCategory={setCategory}
        />
      </Modal>
    </Container>
  );
};
