import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import SetaEsquerda from '../../assets/icons/ic_setaEsquerda.svg';
import SearchBar from '../../components/Search';
import { CardInfo } from '../../components/CardInfo';
import { CategoryFilter, Category } from '../../components/CategoryFilter';
import ServiceItemCard from '../../components/ServiceItemCard';

type ServiceData = {
  id: string;
  nome: string;
  cliente: string;
  preco: number;
  data: string;
};

import TesouraIcon from '../../assets/images/img_tesoura.png';
import CorteIconPreto from '../../assets/images/img_cortePreto.png';
import ColoracaoIconPreto from '../../assets/images/img_coloracaoPreto.png';
import BarbaIconPreto from '../../assets/images/img_barbaPreto.png';
import CorteBarbaIconPreto from '../../assets/images/img_CorteBarbaPreto.png';
import HidratacaoIconPreto from '../../assets/images/img_hidratacaoPreto.png';
import CorteIconBranco from '../../assets/images/img_corteBranco.png';
import ColoracaoIconBranco from '../../assets/images/img_coloracaoBranco.png';
import BarbaIconBranco from '../../assets/images/img_barbaBranco.png';
import CorteBarbaIconBranco from '../../assets/images/img_corteBarbaBranco.png';
import HidratacaoIconBranco from '../../assets/images/img_hidratacaoBranco.png';
import { NavBar } from '../../components/NavBar';

const CATEGORIES_DATA: Category[] = [
  { id: '1', label: 'Corte', iconDefault: CorteIconPreto, iconSelected: CorteIconBranco },
  { id: '2', label: 'Coloração', iconDefault: ColoracaoIconPreto, iconSelected: ColoracaoIconBranco },
  { id: '3', label: 'Barba', iconDefault: BarbaIconPreto, iconSelected: BarbaIconBranco },
  { id: '4', label: 'Corte + Barba', iconDefault: CorteBarbaIconPreto, iconSelected: CorteBarbaIconBranco },
  { id: '5', label: 'Hidratação', iconDefault: HidratacaoIconPreto, iconSelected: HidratacaoIconBranco },
];

const ALL_SERVICES_DB: ServiceData[] = [
    { id: '1', nome: 'Coloração', cliente: 'Carlos Oliveira', data: '02/05/2025 17:15', preco: 70.00 },
    { id: '2', nome: 'Corte', cliente: 'Pedro Santos', data: '02/05/2025 13:00', preco: 35.00 },
    { id: '3', nome: 'Corte + Barba', cliente: 'João Silva', data: '02/05/2025 10:30', preco: 55.00 },
    { id: '4', nome: 'Barba', cliente: 'Carlos Oliveira', data: '01/05/2025 16:00', preco: 25.00 },
    { id: '5', nome: 'Hidratação', cliente: 'Pedro Santos', data: '01/05/2025 15:30', preco: 45.00 },
    { id: '6', nome: 'Corte', cliente: 'Carlos Oliveira', data: '01/05/2025 16:00', preco: 35.00 },
    { id: '7', nome: 'Corte', cliente: 'João Silva', data: '01/05/2025 15:30', preco: 35.00 },
];

export default function ServicePerformed() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState<ServiceData[]>([]);

  useEffect(() => {
    let services = ALL_SERVICES_DB;

    if (selectedCategory) {
      const categoryLabel = CATEGORIES_DATA.find(cat => cat.id === selectedCategory)?.label;
      if (categoryLabel) {
        services = services.filter(service => service.nome === categoryLabel);
      }
    }

    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase();
      services = services.filter(service =>
        service.nome.toLowerCase().includes(lowercasedQuery) ||
        service.cliente.toLowerCase().includes(lowercasedQuery)
      );
    }
    
    setFilteredServices(services);
  }, [searchQuery, selectedCategory]);

  const handleGoBack = () => navigation.goBack();
  const handleFilter = () => navigation.navigate('Filters');

  const handleSelectCategory = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <SetaEsquerda width={24} height={24} color="#1C1C1E" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Serviços Realizados</Text>
        </View>
        
        <FlatList
            ListHeaderComponent={
                <>
                    <SearchBar 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        onFilterPress={handleFilter}
                    />
                    <CardInfo
                        label="Total de Seriços Realizados"
                        value={ALL_SERVICES_DB.length.toString()}
                        icon={TesouraIcon}
                    />
                    <CategoryFilter
                        categories={CATEGORIES_DATA}
                        selectedCategoryId={selectedCategory}
                        onSelectCategory={handleSelectCategory}
                    />
                </>
            }
            data={filteredServices}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ServiceItemCard data={item} />}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
        />
      </View>
      <NavBar />
    </SafeAreaView>
  );
}