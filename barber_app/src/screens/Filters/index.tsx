import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Fechar } from '../../assets/icons/ic_fechar.svg';


export default function Filters() {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>FIltros</Text>
          {/* <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Fechar width={24} height={24} color="#1C1C1E" />
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
}