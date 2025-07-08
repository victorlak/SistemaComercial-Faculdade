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