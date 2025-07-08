import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A202C',
    },
    scrollView: {
        paddingHorizontal: 20,
        paddingBottom: 100, // Espaço para o botão fixo no rodapé
    },
    sectionContainer: {
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2D3748',
        marginBottom: 12,
    },
    toggleContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    toggleButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#CBD5E0',
    },
    toggleButtonSelected: {
        backgroundColor: '#4A5568',
        borderColor: '#4A5568',
    },
    toggleButtonText: {
        fontSize: 14,
        color: '#4A5568',
        // fontFamily: 'Poppins-Regular',
    },
    toggleButtonTextSelected: {
        color: '#FFF',
        fontWeight: '500',
        // fontFamily: 'Poppins-Medium',
    },
    dateInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#CBD5E0',
        gap: 8,
    },
    dateInputText: {
        fontSize: 14,
        color: '#718096',
    },
    priceLabel: {
        fontSize: 16,
        color: '#4A5568',
        textAlign: 'center',
        marginBottom: 16,
    },
    // Estilos para o slider visual
    sliderContainer: {
        height: 20,
        justifyContent: 'center',
        marginHorizontal: 8, // Garante que os handles não fiquem colados na borda
    },
    sliderTrack: {
        height: 3,
        backgroundColor: '#CBD5E0',
        borderRadius: 2,
    },
    sliderHandle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#4A5568',
        position: 'absolute',
        // Centraliza o handle verticalmente na linha do track
        top: '50%',
        transform: [{ translateY: -9 }, { translateX: -9 }],
    },
    // ---
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#E2E8F0',
    },
    mainButton: {
        width: '100%',
        height: 50,
        backgroundColor: "#4A5568",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    mainButtonTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: "#FFF",
        fontFamily: "Poppins-Medium",
    },
});