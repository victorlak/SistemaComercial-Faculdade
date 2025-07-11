import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity, Image, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CardInfo } from '../../components/CardInfo';
import { CardSelector } from '../../components/CardSelector';
import { NavBar } from '../../components/NavBar';
import ServiceItemCard from '../../components/ServiceItemCard';
import { styles } from './styles';
import DinheiroIcon from '../../assets/icons/ic_dinheiro.svg';
import FuncionarioIcon from '../../assets/icons/ic_equipe.svg';
import RelogioIcon from '../../assets/icons/ic_Relogio.svg';
import ImgComissao from '../../assets/images/img_comissao.png';
import ImgTesoura from '../../assets/images/img_tesoura.png';

import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { buscarLocalStorage } from '../Login/Storage';

type ServicoRealizado = {
    id: string;
    id_servico: string;
    id_barbeiro: string | null;
    data: string;
    hora: string;
};

type Servico = {
    id: string;
    nome: string;
    preco: number;
    comissao: number;
};

type Barbeiro = {
    id: string;
    nome: string;
    ativo: boolean;
};

type ServicoEnriquecido = ServicoRealizado & {
    nomeServico: string;
    nomeBarbeiro: string;
    precoServico: number;
    comissaoServico: number;
};

const PERIOD_OPTIONS = ['Este mês', 'Mês passado', 'Últimos 7 dias', 'Hoje'];

const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
};

export default function Home() {
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(true);
    const [perfil, setPerfil] = useState<string | null>(null);
    const [idPerfil, setIdPerfil] = useState<string | null>(null);

    const [allServices, setAllServices] = useState<Servico[]>([]);
    const [allBarbers, setAllBarbers] = useState<Barbeiro[]>([]);
    const [allPerformedServices, setAllPerformedServices] = useState<ServicoEnriquecido[]>([]);

    const [selectedBarberForRevenue, setSelectedBarberForRevenue] = useState('Todos');
    const [selectedPeriodForNet, setSelectedPeriodForNet] = useState(PERIOD_OPTIONS[0]);
    const [selectedBarberForCommission, setSelectedBarberForCommission] = useState('Todos');
    
    const employeeOptions = useMemo(() => ['Todos', ...allBarbers.map(b => b.nome)], [allBarbers]);

    useEffect(() => {
        async function getInitialData() {
            const userProfile = await buscarLocalStorage('perfil');
            const userId = await buscarLocalStorage('id_logado');
            setPerfil(userProfile);
            setIdPerfil(userId);
        }
        getInitialData();
    }, []);

    useEffect(() => {
        if (!perfil) {
            return;
        }
        if (perfil === 'BARBEIRO' && !idPerfil) {
            return;
        }

        async function fetchData() {
            setIsLoading(true);
            try {
                const barbersCol = collection(db, "Barbeiro");
                const servicesCol = collection(db, "Servicos");
                const performedServicesCol = collection(db, "ServicosRealizados");

                const performedServicesQuery = perfil === 'BARBEIRO'
                    ? query(performedServicesCol, where("id_barbeiro", "==", idPerfil))
                    : query(performedServicesCol);

                const [barbersSnap, servicesSnap, performedSnap] = await Promise.all([
                    getDocs(barbersCol),
                    getDocs(servicesCol),
                    getDocs(performedServicesQuery)
                ]);

                const barbersData: Barbeiro[] = barbersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Barbeiro));
                const servicesData: Servico[] = servicesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Servico));
                const performedData: ServicoRealizado[] = performedSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as ServicoRealizado));

                setAllBarbers(barbersData);
                setAllServices(servicesData);

                const barbersMap = new Map(barbersData.map(b => [b.id, b.nome]));
                const servicesMap = new Map(servicesData.map(s => [s.id, { nome: s.nome, preco: s.preco, comissao: s.comissao }]));

                const enrichedData: ServicoEnriquecido[] = performedData.map(sr => {
                    const nomeBarbeiro = barbersMap.get(sr.id_barbeiro || '');
                    const serviceInfo = servicesMap.get(sr.id_servico);
                    return { ...sr, nomeServico: serviceInfo?.nome || 'N/A', precoServico: serviceInfo?.preco || 0, nomeBarbeiro: nomeBarbeiro || 'N/A', comissaoServico: serviceInfo?.comissao || 0, };
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
                
                setAllPerformedServices(enrichedData);
            } catch (error) {
                console.error("Erro ao buscar dados da Home:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [perfil, idPerfil]);

    const servicesInPeriod = useMemo(() => {
        const now = new Date();
        return allPerformedServices.filter(service => {
            if (!service.data || typeof service.data.split !== 'function') return false;
            const [dia, mes, ano] = service.data.split('/');
            if (!dia || !mes || !ano) return false;
            const serviceDate = new Date(`${ano}-${mes}-${dia}`);
            if (isNaN(serviceDate.getTime())) return false;
            
            switch (selectedPeriodForNet) {
                case 'Hoje': return serviceDate.toDateString() === now.toDateString();
                case 'Últimos 7 dias': const sevenDaysAgo = new Date(); sevenDaysAgo.setDate(now.getDate() - 7); return serviceDate >= sevenDaysAgo && serviceDate <= now;
                case 'Mês passado': const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1; const year = lastMonth === 11 ? now.getFullYear() - 1 : now.getFullYear(); return serviceDate.getMonth() === lastMonth && serviceDate.getFullYear() === year;
                case 'Este mês': default: return serviceDate.getMonth() === now.getMonth() && serviceDate.getFullYear() === now.getFullYear();
            }
        });
    }, [allPerformedServices, selectedPeriodForNet]);
    
    const grossRevenue = useMemo(() => (selectedBarberForRevenue === 'Todos' ? allPerformedServices : allPerformedServices.filter(s => s.nomeBarbeiro === selectedBarberForRevenue)).reduce((sum, s) => sum + s.precoServico, 0), [allPerformedServices, selectedBarberForRevenue]);
    
    const netRevenue = useMemo(() => {
        const gross = servicesInPeriod.reduce((sum, s) => sum + s.precoServico, 0);
        const commissions = servicesInPeriod.reduce((sum, s) => sum + (s.precoServico * (s.comissaoServico / 100)), 0);
        return gross - commissions;
    }, [servicesInPeriod]);
    
    const totalCommissions = useMemo(() => (selectedBarberForCommission === 'Todos' ? allPerformedServices : allPerformedServices.filter(s => s.nomeBarbeiro === selectedBarberForCommission)).reduce((sum, s) => sum + (s.precoServico * (s.comissaoServico / 100)), 0), [allPerformedServices, selectedBarberForCommission]);
    
    const activeBarberCount = useMemo(() => allBarbers.filter(b => b.ativo === true).length, [allBarbers]);
    
    const barberTotalCommission = useMemo(() => perfil !== 'BARBEIRO' ? 0 : allPerformedServices.reduce((sum, s) => sum + (s.precoServico * (s.comissaoServico / 100)), 0), [allPerformedServices, perfil]);
    
    const barberCommissionInPeriod = useMemo(() => perfil !== 'BARBEIRO' ? 0 : servicesInPeriod.reduce((sum, s) => sum + (s.precoServico * (s.comissaoServico / 100)), 0), [servicesInPeriod, perfil]);

    const renderAdminView = () => (
        <>
            <CardSelector selectorLabel="Filtrar por Barbeiro" options={employeeOptions} initialSelectedOption={selectedBarberForRevenue} onSelect={setSelectedBarberForRevenue} icon={DinheiroIcon} valueLabel="Receita Bruta" value={formatCurrency(grossRevenue)} iconColor='#61b265' />
            <CardSelector selectorLabel="Filtrar por Período" options={PERIOD_OPTIONS} initialSelectedOption={selectedPeriodForNet} onSelect={setSelectedPeriodForNet} icon={RelogioIcon} valueLabel="Receita Líquida" value={formatCurrency(netRevenue)} iconColor='#e74c3c' />
            <CardSelector selectorLabel="Filtrar por Barbeiro" options={employeeOptions} initialSelectedOption={selectedBarberForCommission} onSelect={setSelectedBarberForCommission} icon={ImgComissao} valueLabel="Total em Comissões" value={formatCurrency(totalCommissions)} />
            
            <View style={styles.cardInfoRow}>
                <View style={styles.cardInfoItem}>
                    <CardInfo label="Funcionários Ativos" value={activeBarberCount.toString()} icon={FuncionarioIcon} iconColor='#3498db' />
                </View>
                <View style={styles.cardInfoItem}>
                    <CardInfo label="Tipos de Serviços" value={allServices.length.toString()} icon={ImgTesoura} />
                </View>
            </View>
        </>
    );

    const renderBarberView = () => (
        <>
            <CardInfo label="Total de Comissões Recebidas" value={formatCurrency(barberTotalCommission)} icon={DinheiroIcon} iconColor='#61b265' />
            <CardSelector selectorLabel="Período" options={PERIOD_OPTIONS} initialSelectedOption={selectedPeriodForNet} onSelect={setSelectedPeriodForNet} icon={RelogioIcon} valueLabel="Comissões Recebidas/período" value={formatCurrency(barberCommissionInPeriod)} />
        </>
    );

    if (isLoading) {
        return (
            <SafeAreaView style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#1C1C1E" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={require('../../assets/images/img_logo.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>Barbearia</Text>
                <View style={{ width: '100%', gap: 16 }}>
                    {perfil === 'ADM' ? renderAdminView() : renderBarberView()}
                </View>
                
                <Text style={styles.tituloSecao}>Serviços Recentes</Text>
                <View style={styles.servicesGrid}>
                    {allPerformedServices.slice(0, 4).map((servico) => (
                        <View key={servico.id} style={styles.serviceItem}>
                            <ServiceItemCard data={servico} />
                        </View>
                    ))}
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('ServicePerformed')}>
                    <Text style={styles.verTodos}>Ver todos →</Text>
                </TouchableOpacity>
            </ScrollView>
            <NavBar />
        </SafeAreaView>
    );
}