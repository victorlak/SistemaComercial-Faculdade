import { TextInput, TextInputProps, View, Text, ViewStyle, TextStyle } from "react-native";
import {styles} from "./styles"
import React from "react";

type Props = TextInputProps & {
    label?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    children?: React.ReactNode; 
}

export default function Input({label, style, textStyle, children, ...rest}: Props){

    return(
        <View style={[styles.container, style]}>
            {label && <Text style={[styles.label, textStyle]}>{label}</Text>}
            <View> 
                <TextInput style={[styles.input, style]} {...rest} />
                {children} 
            </View>
        </View>
    
    )
}
