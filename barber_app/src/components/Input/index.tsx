import { TextInput, TextInputProps, View, Text, ViewStyle, TextStyle } from "react-native";
import {styles} from "./styles"

type Props = TextInputProps & {
    label?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    children?: React.ReactNode; 
}

export default function Input({label, style, textStyle, children, ...rest}: Props){

    return(
        <View style={styles.container}>
            <Text style={[styles.label, textStyle]}>{label}</Text>
            <TextInput style={[styles.input, style]} {...rest} >
                {children}
            </TextInput>
        </View>
    
    )
}
