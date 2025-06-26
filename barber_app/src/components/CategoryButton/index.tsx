import React from 'react';
import { TouchableOpacity, Text, Image, View, ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';

type IconType = React.FC<SvgProps> | ImageSourcePropType;

type Props = {
  label: string;
  iconDefault: IconType;
  iconSelected: IconType;
  isSelected: boolean;
  onPress: () => void;
};

export const CategoryButton = ({ 
  label, 
  iconDefault, 
  iconSelected, 
  isSelected, 
  onPress 
}: Props) => {
  const Icon = isSelected ? iconSelected : iconDefault;
  const isSvg = typeof Icon === 'function';

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.containerSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconWrapper}>
        {isSvg ? (
          <Icon 
            width={20} 
            height={20} 
            color={isSelected ? '#FFFFFF' : '#1C1C1E'} 
          />
        ) : (
          <Image 
            source={Icon as ImageSourcePropType} 
            style={styles.iconImage} 
          />
        )}
      </View>
      <Text style={[styles.label, isSelected && styles.labelSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};