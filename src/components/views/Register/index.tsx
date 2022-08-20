// @ts-nocheck
import { FC, useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Button } from '../../molecules/Button';
import { CategorySelectButton } from '../../molecules/CategorySelectButton';
import { TransactionTypeButton } from '../../molecules/TransactionTypeButton';
import { InputForm } from '../../organims/InputForm';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TransactionTypes } from './styles';
import { FormData } from './types';
import { schema } from './schemas';
import transactionsStorage from '../../../utils/storage/transactions/transactionsStorage';
import { Transaction } from '../../../models/Transactions.model';

export const Register: FC = () => {
  const [category, setCategory] = useState({ key: 'category', name: 'Categoria' });
  const [transactionType, setTransactionType] = useState<Transaction['type']>('income');
  const [modalVisible, setModalVisible] = useState(false);

  const handleTransactionsTypeSelect = (type: Transaction['type']) => {
    setTransactionType(type);
  };
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line consistent-return
  const handleRegister = async (form: FormData) => {
    if (!transactionType) return Alert.alert('Selecione o tipo da transação');

    if (category.key === 'category') return Alert.alert('Selecione a categoria');

    const data: Transaction = {
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      createdAt: new Date(),
      id: String(uuid.v4()),
    };

    try {
      console.log(data);
      await transactionsStorage.insert(data);
      reset();
      setTransactionType('income');
      setCategory({ key: 'category', name: 'Categoria' });
      navigate('Listagem');
    } catch (e) {
      console.log(e);
      Alert.alert('Erro ao cadastrar transação');
    }

    console.log(data);
  };

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
                onPress={() => handleTransactionsTypeSelect('income')}
                isActive={transactionType === 'income'}
              />
              <TransactionTypeButton
                type="down"
                title="Saída"
                onPress={() => handleTransactionsTypeSelect('outcome')}
                isActive={transactionType === 'outcome'}
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
