import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../../utils/categories';
import { Button } from '../../molecules/Button';
import { Category, Container, Footer, Header, Icon, Name, Separator, Title } from './styles';

interface ICategory {
  key: string;
  name: string;
}

interface Props {
  category: ICategory;
  // eslint-disable-next-line no-unused-vars
  setCategory: (selectedCategory: ICategory) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect: FC<Props> = ({ category, setCategory, closeSelectCategory }) => {
  const handleCategorySelect = (selectedCategory: ICategory) => {
    setCategory(selectedCategory);
  };
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category onPress={() => handleCategorySelect(item)} isActive={category.key === item.key}>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
};
