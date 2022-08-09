import { FC } from 'react';
import {
  Container,
  Header,
  HighLightCards,
  Icon,
  Photo,
  Title,
  Transactions,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from './styles';
import { HighLightCard } from '../../molecules/HighlightCard';

export const Dashboard: FC = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars2.githubusercontent.com/u/2254731?s=460&v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>André</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard amount="dasdsa" lastTransaction="dsadsadas" title="dasdsadsa" type="up" />
        <HighLightCard amount="dasdsa" lastTransaction="dsadsadas" title="dasdsadsa" type="down" />

        <HighLightCard amount="dasdsa" lastTransaction="dsadsadas" title="dasdsadsa" type="total" />
      </HighLightCards>

      <Transactions>
        <Title>LISTAGEM</Title>
      </Transactions>
    </Container>
  );
};
