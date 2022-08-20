import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(24)}px;
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(8)}px;
  margin-bottom: 16px;
`;
