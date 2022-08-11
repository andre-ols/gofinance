import { FC } from 'react';
import { Button } from '../../molecules/Button';
import { InputField } from '../../molecules/InputField';
import { Container, Fields, Form, Header, Title } from './styles';

export const Register: FC = () => {
  return (
    <Container>
      <Header>
        <Title> Cadastro </Title>
      </Header>

      <Form>
        <Fields>
          <InputField placeholder="Nome" />
          <InputField placeholder="Preço" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
};
