import { TextStyle, ViewStyle, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    label: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function Button({ label, style, textStyle, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.button, style]} {...rest}>
      <Text style={[styles.title, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}