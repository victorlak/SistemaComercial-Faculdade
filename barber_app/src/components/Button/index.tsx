import React from "react";
import { TextStyle, ViewStyle, TouchableOpacity, Text, TouchableOpacityProps, View } from "react-native";
import { styles } from './styles';
import { SvgProps } from 'react-native-svg';

type Props = TouchableOpacityProps & {
    label: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    icone?: React.ReactNode;
}

export default function Button({ label, style, textStyle, icone, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.button, style]} {...rest}>
      <View style={styles.container}>
       {icone ? icone : null} <Text style={[styles.title, textStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

