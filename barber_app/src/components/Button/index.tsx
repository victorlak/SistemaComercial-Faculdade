import { TextStyle, ViewStyle, TouchableOpacity, Image, Text, TouchableOpacityProps, StyleProp, ImageSourcePropType } from "react-native";
import { styles } from './styles';
import React from "react";
import { SvgProps } from 'react-native-svg';

type Props = TouchableOpacityProps & {
  label?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  icon?: React.FC<SvgProps> | ImageSourcePropType;
  iconColor?: string;
  iconSize?: number;
}

const Button = ({ label, style, textStyle, children, icon: Icon, iconColor, iconSize = 24, ...rest }: Props) => {
  const isSvgComponent = typeof Icon === 'function';
  const iconMarginRight = label ? 5 : 0;

  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.button, style]} {...rest}>

      {Icon && ( 
        isSvgComponent ? (
          
          <Icon
            width={iconSize}
            height={iconSize}
            fill={iconColor}
            style={{ marginRight: iconMarginRight }} 
          />
          
          
        ) : (
          <Image
            source={Icon as ImageSourcePropType}
            style={[
              styles.iconImage,
              {
                width: iconSize,
                height: iconSize,
                marginRight: iconMarginRight 
              }
            ]}
          />
          
        )
        
      )}
      

      {label && <Text style={[styles.title, textStyle]}>{label}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default Button;