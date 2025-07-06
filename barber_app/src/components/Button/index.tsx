import { TextStyle, ViewStyle, TouchableOpacity, Text, TouchableOpacityProps, StyleProp } from "react-native";
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    label?: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children?: React.ReactNode; 
}

export default function Button({ label, style, textStyle, children, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.button, style]} {...rest}>
      {children} 
      {label && <Text style={[styles.title, textStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
}