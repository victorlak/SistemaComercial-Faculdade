import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import SetaEsquerda from '../../assets/icons/ic_setaEsquerda.svg';
import SearchBar from '../../components/Search';
import { CardInfo } from '../../components/CardInfo';
import { CategoryFilter, Category } from '../../components/CategoryFilter';
import ServiceItemCard from '../../components/ServiceItemCard';
import { NavBar } from '../../components/NavBar';
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

type ServiceData = {
  id: string;
  nome: string;
  cliente: string;
  preco: number;
  data: string;
};

type ServicePerformedRouteParams = {
    filters?: {
        services: string[];
        barbers: string[];
        dateOption: string;
        price: { min: number; max: number };
    };
};
type ServicePerformedRouteProp = RouteProp<{ params: ServicePerformedRouteParams }, 'params'>;

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
  const route = useRoute<ServicePerformedRouteProp>();
  const receivedFilters = route.params?.filters;

  const areFiltersActive = !!receivedFilters;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState<ServiceData[]>(ALL_SERVICES_DB);

  useEffect(() => {
    let services = ALL_SERVICES_DB;

    if (receivedFilters) {
        if (receivedFilters.services.length > 0) {
            services = services.filter(service => receivedFilters.services.includes(service.nome));
        }
        if (receivedFilters.barbers.length > 0) {
            services = services.filter(service => receivedFilters.barbers.includes(service.cliente));
        }
        if (receivedFilters.price) {
            services = services.filter(service => 
                service.preco >= receivedFilters.price.min && service.preco <= receivedFilters.price.max
            );
        }
        if (receivedFilters.dateOption) {
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            services = services.filter(service => {
                const [datePart] = service.data.split(' ');
                const [day, month, year] = datePart.split('/').map(Number);
                const serviceDate = new Date(year, month - 1, day);

                switch (receivedFilters.dateOption) {
                    case 'Hoje':
                        return serviceDate.toDateString() === today.toDateString();
                    case 'Últimos 7 dias':
                        const sevenDaysAgo = new Date(today);
                        sevenDaysAgo.setDate(today.getDate() - 7);
                        return serviceDate >= sevenDaysAgo && serviceDate <= today;
                    case 'Este mês':
                        return serviceDate.getMonth() === today.getMonth() &&
                               serviceDate.getFullYear() === today.getFullYear();
                    default:
                        return true;
                }
            });
        }
    } 
    else if (selectedCategory) {
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
  }, [searchQuery, selectedCategory, receivedFilters]);

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
                        isFilterActive={areFiltersActive}
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
