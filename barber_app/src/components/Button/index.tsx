import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
}

export default function Button({ label, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} {...rest}>
      {label && <Text style={styles.title}>{label}</Text>}
    </TouchableOpacity>
  );
}
