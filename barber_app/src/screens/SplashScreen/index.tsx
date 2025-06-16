import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Index() {

    const navigation = useNavigation<any>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Painel', {}, { replace: true });//TEM Q FICAR NO LOGIN
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    )
}
