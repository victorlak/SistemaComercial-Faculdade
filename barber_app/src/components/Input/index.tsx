<<<<<<< HEAD
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
        <View style={[styles.container, style]}>
            {label && <Text style={[styles.label, textStyle]}>{label}</Text>}
            <View> 
                <TextInput style={[styles.input, style]} {...rest} />
                {children} 
            </View>
        </View>
    
    )
}
=======
import { TextInput, TextInputProps, View, Text } from "react-native";
import {styles} from "./styles"
import React from "react";

interface CustomInputProps extends TextInputProps {
    label?: string;
}

export function Input({label, ...rest}: CustomInputProps){

    return(
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput style={styles.input} {...rest} />
        </View>
    
    )
}
>>>>>>> dev_base
