import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    inputDate: {
        width: 154,
    },
    datePicker: {
        height: 120,
    },
    buttonDate: {
        backgroundColor: '#11182711',
        paddingHorizontal: 20,
        width: 120,
        height: 35,
    },
    textButtonDate: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#595858',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', 
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%', 
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    iosButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 10,
    },
});