import { FC } from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

type props = TextInputProps;

export const InputField: FC<props> = ({ ...rest }) => {
  return <Container {...rest} />;
};
