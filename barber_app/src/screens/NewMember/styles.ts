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
    
    profilePictureContainer: {
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    photoContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0', 
        alignSelf: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
    photoPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0', 
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50,
    },
    editButton: {
        backgroundColor: '#080852',
        width: 26,
        height: 26,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 13,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    addMemberButton: {
        width: 117,
        height: 40,
        borderRadius: 22,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginBottom: 30,
    },
    textButton: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
    },
    
});

export default styles;