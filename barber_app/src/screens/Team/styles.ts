import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContent: {
        paddingBottom: 100,
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
    cardsContainer: {
        marginTop: 10,
        marginRight: 25,
        marginLeft: 25,
    },
    cardUpdateStyle: {
        marginBottom: 30,
    },

});

export default styles