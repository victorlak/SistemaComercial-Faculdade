import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window');

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
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    
    textButton: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
    },
    especialidadesContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
    },
    textEspecialidade: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#000',
        marginTop: 22,
        marginBottom: 8,
        alignSelf: 'center',
        marginRight: 220,
    },
    especialidadeButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,        
        width: '100%',
        justifyContent: 'center',
        maxWidth: 400,
        alignSelf: 'center',
    },
    specialtyButton: {
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 22,
        paddingHorizontal: 10,
        marginBottom: 10,
        margin: 1,
        borderWidth: 1,
        borderColor: "#d0d0d0",
        width: 150,
    },
    selectedSpecialtyButton: {
        backgroundColor: '#595858',
    },
    specialtyButtonText: {
      color: '#000', 
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
    },
    selectedSpecialtyButtonText: {
        color: '#FFF',
    },
    addMemberButton: {
        width: 117,
        height: 40,
        borderRadius: 22,
        alignSelf: 'center',
        marginLeft: 220,
        marginTop: 30,
        marginBottom: 30,
    },
});

export default styles;