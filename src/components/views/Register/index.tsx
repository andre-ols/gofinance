import { FC, useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../molecules/Button';
import { CategorySelectButton } from '../../molecules/CategorySelectButton';
import { TransactionTypeButton } from '../../molecules/TransactionTypeButton';
import { InputForm } from '../../organims/InputForm';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TransactionTypes } from './styles';
import { FormData } from './types';
import { schema } from './schemas';

export const Register: FC = () => {
  const [category, setCategory] = useState({ key: 'category', name: 'Categoria' });
  const [transactionType, setTransactionType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleTransactionsTypeSelect = (type: 'positive' | 'negative') => {
    setTransactionType(type);
  };

  const handleRegister = (form: FormData) => {
    if (!transactionType) return Alert.alert('Selecione o tipo da transação');

    if (category.key === 'category') return Alert.alert('Selecione a categoria');

    return console.log(form);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title> Cadastro </Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message.toString()}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message.toString()}
            />
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

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={modalVisible} statusBarTranslucent>
          <CategorySelect
            category={category}
            closeSelectCategory={() => setModalVisible(false)}
            setCategory={setCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};
