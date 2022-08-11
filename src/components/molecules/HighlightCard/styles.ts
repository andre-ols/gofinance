import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export interface CardType {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<CardType>`
  background-color: ${(props) =>
    props.type === 'total' ? props.theme.colors.secondary : props.theme.colors.shape};
  width: ${RFValue(280)}px;

  border-radius: ${RFValue(5)}px;

  padding: ${RFValue(18)}px ${RFValue(24)}px;

  padding-bottom: ${RFValue(42)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.Text<CardType>`
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) =>
    props.type === 'total' ? props.theme.colors.shape : props.theme.colors.dark};
`;

export const Icon = styled(Feather)<CardType>`
  font-size: ${RFValue(40)}px;
  ${(props) =>
    props.type === 'up' &&
    css`
      color: ${props.theme.colors.success};
    `};

  ${(props) =>
    props.type === 'down' &&
    css`
      color: ${props.theme.colors.attention};
    `};

  ${(props) =>
    props.type === 'total' &&
    css`
      color: ${props.theme.colors.shape};
    `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<CardType>`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${(props) =>
    props.type === 'total' ? props.theme.colors.shape : props.theme.colors.dark};
  margin-top: ${RFValue(24)}px;
`;

export const LastTransaction = styled.Text<CardType>`
  font-size: ${RFValue(12)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) =>
    props.type === 'total' ? props.theme.colors.shape : props.theme.colors.text};
`;
