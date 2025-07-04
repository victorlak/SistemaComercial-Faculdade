import React from 'react';
// 1. Importe o componente 'Image' do react-native
import { View, TextInput, TouchableOpacity, Image } from 'react-native'; 
import { styles } from './styles';

// Seus imports de ícones estão corretos
import LupaIcon from '../../assets/icons/ic_pesquisar.svg';
import FiltroIcon from '../../assets/images/img_filtro.png';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onFilterPress: () => void;
}

export default function SearchBar({ searchQuery, setSearchQuery, onFilterPress }: SearchBarProps) {
  return (
    <View style={styles.wrapper}>
      {/* Container do Input e Ícone de Lupa */}
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
      
      {/* Botão de Filtro */}
      <TouchableOpacity onPress={onFilterPress} style={styles.filterButton}>
        {/* 2. Use o componente <Image> para renderizar seu PNG */}
        <Image source={FiltroIcon} style={styles.filterIconImage} />
      </TouchableOpacity>
    </View>
  );
}