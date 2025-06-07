import { View, Text, StyleSheet } from "react-native"
import Button from "../../components/Button"
import { Input } from "../../components/Input"
import styles from './styles'

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style= {styles.title}>Login</Text>

            <View >
                <Input placeholder="Seu Email" label ="Email" />
            </View>

            <View >
                <Input placeholder="Sua Senha" label ="Senha"/>
            </View>

            <View >
                <Button label ="Entrar"/>
            </View>

        </View>
    )
}