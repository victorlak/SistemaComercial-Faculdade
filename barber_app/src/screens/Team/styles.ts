import { StyleSheet } from 'react-native';
import { styles as stylesButton } from '../../components/Button/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 50,
    },
    newMemberButton: {
        width: 123,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newMemberText: {
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',

    },

});

export default styles