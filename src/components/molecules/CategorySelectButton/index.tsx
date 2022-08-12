import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Category, Container, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const CategorySelectButton: FC<Props> = ({ title, onPress, ...rest }) => {
  return (
    <Container {...rest} onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};
