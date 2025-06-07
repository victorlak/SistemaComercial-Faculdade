import { TouchableOpacity, Text, TextInputProps } from "react-native"
import {styles} from './styles'

interface CustomInputProps extends TextInputProps {
    label?: string; // Torna o label opcional
}

export default function Button({label}: CustomInputProps){
    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            {label && <Text style={styles.title}>{label}</Text>}
        </TouchableOpacity>
    )
}