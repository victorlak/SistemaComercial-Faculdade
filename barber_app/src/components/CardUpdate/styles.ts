import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: '#000000',
        marginBottom: 2,
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#595858',
    },
    headerTeam: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
        backgroundColor: '#E0E0E0',
    },
    headerTextContainerTeam: {
        flex: 1,
    },
    headerService: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    priceText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: '#595858',
    },
    specialtiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 22,
    },
    specialtyTag: {
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#080852',
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginRight: 8,
        marginBottom: 6,
    },
    specialtyText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 9,
        color: '#080852',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoIcon: {
        marginRight: 8,
        color: '#1C1C1E',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
        marginVertical: 15,
    },
    actionsContainer: {
        flexDirection: 'row',
    },
    editButton: {
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#080852',
        flexDirection: 'row',
        paddingVertical: 8,
        marginRight: 8,
        justifyContent: 'center',
        paddingHorizontal: 2,
        height: 23,
        width: 72,
    },
    editButtonText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 11,
        color: '#080852',
        marginLeft: 5,
    },
    removeButton: {
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FF3033',
        flexDirection: 'row',
        paddingVertical: 8,
        marginRight: 8,
        justifyContent: 'center',
        paddingHorizontal: 2,
        height: 23,
        width: 72,
    },
    removeButtonText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 11,
        color: '#FF3033',
        marginLeft: 5,
    },
})