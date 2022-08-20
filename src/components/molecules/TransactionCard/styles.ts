import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Transaction } from '../../../models/Transactions.model';

interface TransactionProps {
  type: Transaction['type'];
}

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.shape};
  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(18)}px ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.medium};
`;

export const Amount = styled.Text<TransactionProps>`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;
  color: ${(props) =>
    props.type === 'income' ? props.theme.colors.success : props.theme.colors.attention};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(18)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(16)}px;
  color: ${(props) => props.theme.colors.text};
`;

export const Date = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.colors.text};
`;
