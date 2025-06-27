import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { CategoryButton } from '../CategoryButton';
import { styles } from './styles';

type IconType = React.FC<SvgProps> | ImageSourcePropType;
export interface Category {
  id: string;
  label: string;
  iconDefault: IconType;
  iconSelected: IconType;
}

type Props = {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (id: string) => void;
};

export const CategoryFilter = ({ categories, selectedCategoryId, onSelectCategory }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            label={category.label}
            iconDefault={category.iconDefault}
            iconSelected={category.iconSelected}
            isSelected={selectedCategoryId === category.id}
            onPress={() => onSelectCategory(category.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};