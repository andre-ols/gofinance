import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};

  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(16)}px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.medium};
`;
