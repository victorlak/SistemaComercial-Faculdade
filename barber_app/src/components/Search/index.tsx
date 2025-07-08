import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

import LupaIcon from '../../assets/icons/ic_pesquisar.svg';
import FiltroIcon from '../../assets/images/img_filtro.png';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onFilterPress: () => void;
  isFilterActive?: boolean; // 1. Adicione a nova propriedade aqui
}

export default function SearchBar({ searchQuery, setSearchQuery, onFilterPress, isFilterActive }: SearchBarProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <LupaIcon width={20} height={20} color="#8E8E93" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          placeholderTextColor="#8E8E93"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      {/* 2. Aplique o estilo condicional aqui */}
      <TouchableOpacity 
        onPress={onFilterPress} 
        style={[
          styles.filterButton, 
          isFilterActive && styles.filterButtonActive 
        ]}
      >
        <Image source={FiltroIcon} style={styles.filterIconImage} />
      </TouchableOpacity>
    </View>
  );
}