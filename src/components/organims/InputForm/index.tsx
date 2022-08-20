// @ts-nocheck
import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { InputField } from '../../molecules/InputField';
import { Container, Error } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export const InputForm: FC<Props> = ({ control, name, error, ...rest }) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputField {...rest} onChangeText={onChange} value={value} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

InputForm.defaultProps = {
  error: undefined,
};
