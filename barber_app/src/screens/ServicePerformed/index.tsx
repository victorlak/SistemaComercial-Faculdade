import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { styles } from './styles';

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

import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { buscarLocalStorage } from '../Login/Storage';

type ServicoPerfomed = {
    id: string;
    id_servico: string;
    id_barbeiro: string | null;
    nomeDoCliente: string;
    descricaoDoServicoRealizado: string;
    metodoDePagamento: string;
    data: string;
    hora: string;
}

type ServicoEnriquecido = ServicoPerfomed & {
    nomeBarbeiro: string;
    nomeServico: string;
    precoServico: number;
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

export default function ServicePerformed() {
    const navigation = useNavigation();
    const route = useRoute<ServicePerformedRouteProp>();
    const receivedFilters = route.params?.filters;
    const areFiltersActive = !!receivedFilters;

    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [servicosEnriquecidos, setServicosEnriquecidos] = useState<ServicoEnriquecido[]>([]);
    const [filteredServices, setFilteredServices] = useState<ServicoEnriquecido[]>([]);

    const [perfil, setPerfil] = useState<string | null>(null);
    const [idPerfil, setIdPerfil] = useState<string | null>(null);

    useEffect(() => {
        async function obterUser() {
            const perfilStorage = await buscarLocalStorage('perfil');
            const idStorage = await buscarLocalStorage('id_logado');
            setPerfil(perfilStorage);
            setIdPerfil(idStorage);
        }
        obterUser();
    }, []);
    
    async function buscarBarbeiros() {
        const barbeirosCol = collection(db, "Barbeiro");
        const snapshot = await getDocs(barbeirosCol);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as { nome: string } }));
    }

    async function buscarServicos() {
        const servicosCol = collection(db, "Servicos");
        const snapshot = await getDocs(servicosCol);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as { nome: string, preco: number } }));
    }

    async function buscarServicosRealizados(userProfile: string, userId: string | null) {
        const servicosRealizadosCol = collection(db, "ServicosRealizados");
        let q;

        if (userProfile === 'BARBEIRO' && userId) {
            q = query(servicosRealizadosCol, where("id_barbeiro", "==", userId));
        } else {
            q = query(servicosRealizadosCol);
        }

        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Omit<ServicoPerfomed, 'id'>) }));
    }
    
    useEffect(() => {
        if (!perfil) {
            return;
        }
        if (perfil === 'BARBEIRO' && !idPerfil) {
            return;
        }

        async function carregarECombinarDados() {
            setIsLoading(true);
            try {
                const [servicosRealizadosData, barbeirosData, servicosData] = await Promise.all([
                    buscarServicosRealizados(perfil, idPerfil),
                    buscarBarbeiros(),
                    buscarServicos()
                ]);

                const barbeirosMap = new Map(barbeirosData.map(b => [b.id, b.nome]));
                const servicosMap = new Map(servicosData.map(s => [s.id, { nome: s.nome, preco: s.preco }]));

                const dadosCombinados: ServicoEnriquecido[] = servicosRealizadosData.map(sr => {
                    const nomeBarbeiro = barbeirosMap.get(sr.id_barbeiro || '') || 'Não encontrado';
                    const servicoInfo = servicosMap.get(sr.id_servico);
                    return { ...sr, nomeBarbeiro, nomeServico: servicoInfo?.nome || 'Não encontrado', precoServico: servicoInfo?.preco || 0, };
                }).sort((a, b) => {
                    if (!b.data || !b.hora) return -1;
                    if (!a.data || !a.hora) return 1;
                    try {
                        const [diaA, mesA, anoA] = a.data.split('/');
                        const dataA = new Date(`${anoA}-${mesA}-${diaA}T${a.hora}`);
                        const [diaB, mesB, anoB] = b.data.split('/');
                        const dataB = new Date(`${anoB}-${mesB}-${diaB}T${b.hora}`);
                        if (isNaN(dataB.getTime())) return -1;
                        if (isNaN(dataA.getTime())) return 1;
                        return dataB.getTime() - dataA.getTime();
                    } catch (e) {
                        return 0;
                    }
                });
                
                setServicosEnriquecidos(dadosCombinados);
            } catch (error) {
                console.error("Erro ao carregar e combinar dados:", error);
            } finally {
                setIsLoading(false);
            }
        };
        carregarECombinarDados();
    }, [perfil, idPerfil]);

    useEffect(() => {
        let servicesToFilter = [...servicosEnriquecidos];

        if (receivedFilters) {
            if (receivedFilters.services.length > 0) {
                servicesToFilter = servicesToFilter.filter(s => receivedFilters.services.includes(s.nomeServico));
            }
            if (receivedFilters.barbers.length > 0) {
                servicesToFilter = servicesToFilter.filter(s => receivedFilters.barbers.includes(s.nomeBarbeiro));
            }
            if (receivedFilters.price) {
                servicesToFilter = servicesToFilter.filter(s => s.precoServico >= receivedFilters.price.min && s.precoServico <= receivedFilters.price.max);
            }
        }
        
        if (selectedCategory) {
            const categoryLabel = CATEGORIES_DATA.find(cat => cat.id === selectedCategory)?.label;
            if (categoryLabel) {
                servicesToFilter = servicesToFilter.filter(s => s.nomeServico === categoryLabel);
            }
        }

        if (searchQuery.trim() !== '') {
            const lowercasedQuery = searchQuery.toLowerCase();
            servicesToFilter = servicesToFilter.filter(s =>
                s.nomeServico.toLowerCase().includes(lowercasedQuery) ||
                s.nomeBarbeiro.toLowerCase().includes(lowercasedQuery)
            );
        }

        setFilteredServices(servicesToFilter);
    }, [searchQuery, selectedCategory, receivedFilters, servicosEnriquecidos]);

    const handleGoBack = () => navigation.navigate('Home');
    const handleFilter = () => navigation.navigate('Filters');
    const handleSelectCategory = (categoryId: string) => {
        setSelectedCategory(prev => (prev === categoryId ? null : categoryId));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <SetaEsquerda width={24} height={24} color="#1C1C1E" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Serviços Realizados</Text>
            </View>
            
            <FlatList
                ListHeaderComponent={
                    <View style={styles.contentPadding}>
                        <SearchBar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onFilterPress={handleFilter}
                            isFilterActive={areFiltersActive}
                        />
                        <CardInfo
                            label="Total de Serviços Realizados"
                            value={servicosEnriquecidos.length.toString()}
                            icon={TesouraIcon}
                        />
                        <CategoryFilter
                            categories={CATEGORIES_DATA}
                            selectedCategoryId={selectedCategory}
                            onSelectCategory={handleSelectCategory}
                        />
                    </View>
                }
                data={filteredServices}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{ paddingHorizontal: 28, paddingTop: 12 }}>
                        <ServiceItemCard data={item} />
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    isLoading ? 
                        <ActivityIndicator size="large" color="#1C1C1E" style={{ marginTop: 50 }} /> : 
                        <Text style={styles.emptyText}>Nenhum serviço encontrado.</Text>
                }
                ListFooterComponent={<View style={{ height: 100 }} />}
            />
            <NavBar />
        </SafeAreaView>
    );
}