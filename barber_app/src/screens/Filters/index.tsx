import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
    ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import PriceRangeSlider from '../../components/PriceRangeSlider';
import CloseIcon from '../../assets/icons/ic_fechar.svg';

import { db } from '../../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { buscarLocalStorage } from '../Login/Storage';


type ButtonProps = TouchableOpacityProps & {
    label: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
};

const MainButton = ({ label, style, textStyle, ...rest }: ButtonProps) => (
    <TouchableOpacity activeOpacity={0.8} style={[styles.mainButton, style]} {...rest}>
        <Text style={[styles.mainButtonTitle, textStyle]}>{label}</Text>
    </TouchableOpacity>
);

type ToggleButtonProps = TouchableOpacityProps & {
    label: string;
    isSelected: boolean;
};

const ToggleButton = ({ label, isSelected, ...rest }: ToggleButtonProps) => (
    <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.toggleButton, isSelected && styles.toggleButtonSelected]}
        {...rest}
    >
        <Text style={[styles.toggleButtonText, isSelected && styles.toggleButtonTextSelected]}>
            {label}
        </Text>
    </TouchableOpacity>
);

type FilterSectionProps = {
    title: string;
    children: React.ReactNode;
};

const FilterSection = ({ title, children }: FilterSectionProps) => (
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {children}
    </View>
);


export default function Filters() {
    const navigation = useNavigation();
    
    const [isLoading, setIsLoading] = useState(true);
    const [perfil, setPerfil] = useState<string | null>(null);
    const [allServices, setAllServices] = useState<{ id: string, nome: string }[]>([]);
    const [allBarbers, setAllBarbers] = useState<{ id: string, nome: string }[]>([]);
    
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedBarbers, setSelectedBarbers] = useState<string[]>([]);
    const [selectedDateOption, setSelectedDateOption] = useState<string>('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
    const [totalMinPrice, setTotalMinPrice] = useState(0);
    const [totalMaxPrice, setTotalMaxPrice] = useState(100);

    async function fetchServices() {
        const servicesCol = collection(db, "Servicos");
        const snapshot = await getDocs(servicesCol);
        return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as { nome: string, preco: number }) }));
    }

    async function fetchBarbers() {
        const barbersCol = collection(db, "Barbeiro");
        const snapshot = await getDocs(barbersCol);
        return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as { nome: string }) }));
    }

    useEffect(() => {
        async function loadFilterData() {
            setIsLoading(true);
            try {
                const userProfile = await buscarLocalStorage('perfil');
                setPerfil(userProfile);

                const [servicesData, barbersData] = await Promise.all([
                    fetchServices(),
                    fetchBarbers()
                ]);

                setAllServices(servicesData);
                setAllBarbers(barbersData);

                if (servicesData.length > 0) {
                    const prices = servicesData.map(s => s.preco);
                    const min = Math.min(...prices);
                    const max = Math.max(...prices);
                    setTotalMinPrice(min);
                    setTotalMaxPrice(max);
                    setPriceRange({ min, max });
                }
            } catch (error) {
                console.error("Erro ao carregar filtros:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadFilterData();
    }, []);

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const toggleBarber = (barber: string) => {
        setSelectedBarbers(prev =>
            prev.includes(barber) ? prev.filter(b => b !== barber) : [...prev, barber]
        );
    };

    const toggleDateOption = (option: string) => {
        setSelectedDateOption(prev => (prev === option ? '' : option));
    };

    const handleApplyFilters = () => {
        const filters = {
            services: selectedServices,
            barbers: selectedBarbers,
            dateOption: selectedDateOption,
            price: priceRange,
        };
        navigation.navigate('ServicePerformed', { filters });
    };

    const dateOptions = ["Hoje", "Últimos 7 dias", "Este mês"];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Filtro</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CloseIcon width={24} height={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.scrollView}>
                    <FilterSection title="Serviços">
                        <View style={styles.toggleContainer}>
                            {isLoading ? (
                                <ActivityIndicator color="#000" />
                            ) : (
                                allServices.map(service => (
                                    <ToggleButton
                                        key={service.id}
                                        label={service.nome}
                                        isSelected={selectedServices.includes(service.nome)}
                                        onPress={() => toggleService(service.nome)}
                                    />
                                ))
                            )}
                        </View>
                    </FilterSection>

                    {perfil !== 'BARBEIRO' && (
                        <FilterSection title="Barbeiro">
                            <View style={styles.toggleContainer}>
                                {isLoading ? (
                                    <ActivityIndicator color="#000" />
                                ) : (
                                    allBarbers.map(barber => (
                                        <ToggleButton
                                            key={barber.id}
                                            label={barber.nome}
                                            isSelected={selectedBarbers.includes(barber.nome)}
                                            onPress={() => toggleBarber(barber.nome)}
                                        />
                                    ))
                                )}
                            </View>
                        </FilterSection>
                    )}

                    <FilterSection title="Data">
                        <View style={styles.toggleContainer}>
                            {dateOptions.map(option => (
                                <ToggleButton
                                    key={option}
                                    label={option}
                                    isSelected={selectedDateOption === option}
                                    onPress={() => toggleDateOption(option)}
                                />
                            ))}
                        </View>
                    </FilterSection>

                    <FilterSection title="Preço">
                        {isLoading ? (
                            <ActivityIndicator color="#000" />
                        ) : (
                            <PriceRangeSlider
                                range={priceRange}
                                onRangeChange={setPriceRange}
                                totalMin={totalMinPrice}
                                totalMax={totalMaxPrice}
                            />
                        )}
                    </FilterSection>
                </ScrollView>

                <View style={styles.footer}>
                    <MainButton label="Aplicar filtros" onPress={handleApplyFilters} />
                </View>
            </View>
        </SafeAreaView>
    );
}