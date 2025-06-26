import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContainer: {
        padding: 20,
        backgroundColor: '#FFF',
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        paddingHorizontal: 20,
    },
    placeholder: {
        width: 24,
    },
    input: {
        alignSelf: 'center',
    },
    alignmentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
});

export default styles;