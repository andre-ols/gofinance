import { Feather } from '@expo/vector-icons';
import { FlatList, FlatListProps, TouchableOpacity } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TrasectionsByCategoryProps } from './types';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.colors.primary};

  width: 100%;
  height: ${RFValue(110)}px;
  align-items: center;
  justify-content: flex-end;

  padding-bottom: ${RFValue(16)}px;
`;
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${(props) => props.theme.colors.shape};
`;

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const Content = styled.View`
  padding: 0 ${RFValue(24)}px;
  flex: 1;
`;

export const Transactions = styled.View`
  flex: 1;
`;

export const TransactionList = styled(
  FlatList as new (
    // eslint-disable-next-line no-unused-vars
    props: FlatListProps<TrasectionsByCategoryProps>,
  ) => FlatList<TrasectionsByCategoryProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 16,
  },
})``;

export const MonthSelect = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
export const MonthSelectButton = styled(TouchableOpacity)``;
export const MonthSelectIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;
export const Month = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
