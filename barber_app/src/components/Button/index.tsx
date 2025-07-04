import { TextStyle, ViewStyle, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    label?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    children?: React.ReactNode; 
}

export default function Button({ label, style, textStyle, children, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.button, style]} {...rest}>
      {children && typeof children === 'string' ? (
        <Text style={textStyle}>{children}</Text> 
      ) : (
        children 
      )}

      {label && <Text style={[styles.title, textStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
}