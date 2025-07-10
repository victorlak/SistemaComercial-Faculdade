import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

// Supondo que seus componentes e assets estão nos caminhos corretos
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
  { id: '8', nome: 'Barba', cliente: 'Lucas Martins', data: '30/04/2025 11:00', preco: 25.00 },
  { id: '9', nome: 'Corte + Barba', cliente: 'Ricardo Alves', data: '30/04/2025 14:00', preco: 60.00 },
  { id: '10', nome: 'Hidratação', cliente: 'João Silva', data: '29/04/2025 18:00', preco: 45.00 },
  { id: '11', nome: 'Coloração', cliente: 'Pedro Santos', data: '29/04/2025 16:30', preco: 75.00 },
  { id: '12', nome: 'Corte', cliente: 'Fernanda Lima', data: '28/04/2025 19:00', preco: 40.00 },
  { id: '13', nome: 'Barba', cliente: 'Carlos Oliveira', data: '28/04/2025 17:00', preco: 25.00 },
  { id: '14', nome: 'Corte', cliente: 'Lucas Martins', data: '27/04/2025 10:00', preco: 35.00 },
  { id: '15', nome: 'Hidratação', cliente: 'Ricardo Alves', data: '27/04/2025 09:30', preco: 50.00 },
  { id: '16', nome: 'Corte + Barba', cliente: 'João Silva', data: '26/04/2025 15:00', preco: 55.00 },
  { id: '17', nome: 'Corte', cliente: 'Carlos Oliveira', data: '25/04/2025 12:00', preco: 35.00 },
  { id: '18', nome: 'Barba', cliente: 'Pedro Santos', data: '25/04/2025 11:30', preco: 30.00 },
  { id: '19', nome: 'Coloração', cliente: 'Fernanda Lima', data: '24/04/2025 14:00', preco: 80.00 },
  { id: '20', nome: 'Corte', cliente: 'Ricardo Alves', data: '24/04/2025 10:00', preco: 35.00 },
];

export default function ServicePerformed() {
  const navigation = useNavigation();
  const route = useRoute<ServicePerformedRouteProp>();
  // ... (lógica dos hooks e useEffect permanece a mesma)
  const receivedFilters = route.params?.filters;

  const areFiltersActive = !!receivedFilters;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState<ServiceData[]>(ALL_SERVICES_DB);

  useEffect(() => {
    let services = [...ALL_SERVICES_DB];

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

  const handleGoBack = () => navigation.navigate('Home');
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
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                <SetaEsquerda width={24} height={24} color="#1C1C1E" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Serviços Realizados</Text>
            </View>
            <View style={styles.contentPadding}>
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
            </View>
          </>
        }
        data={filteredServices}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View style={styles.contentPadding}>
                <ServiceItemCard data={item} />
            </View>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 90 }} />}
      />
      
      <NavBar />
    </SafeAreaView>
  );
}