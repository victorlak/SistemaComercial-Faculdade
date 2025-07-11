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
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginVertical: 15,
        padding: 5,
        width: '90%',
    },
    filterButton: {
        backgroundColor: '#FFF',
        height: 35,
        width: 80,
        borderRadius: 18,
        paddingHorizontal: 2,
        marginBottom: 10,
        margin: 1,
        borderWidth: 1,
        borderColor: "#d0d0d0",
        flex: 1,
        alignItems: 'center',
    },
    filterButtonActive: {
        backgroundColor: '#595858', 
    },
    filterButtonText: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Poppins-Medium'
    },
    filterButtonTextActive: {
        color: '#FFFFFF', 
    },
    noMembersText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },

});

export default styles