import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importando os estilos e componentes
import { styles } from './styles';
import PriceRangeSlider from '../../components/PriceRangeSlider'; // Ajuste o caminho se necessário
import CloseIcon from '../../assets/icons/ic_fechar.svg'; // Ajuste o caminho se necessário

// --- Componente de Botão Principal ---
type ButtonProps = TouchableOpacityProps & {
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};
const MainButton = ({ label, style, textStyle, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.mainButton, style]} {...rest}>
      <Text style={[styles.mainButtonTitle, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

// --- Componente de Botão de Seleção ---
type ToggleButtonProps = TouchableOpacityProps & {
    label: string;
    isSelected: boolean;
};
const ToggleButton = ({ label, isSelected, ...rest }: ToggleButtonProps) => {
    return (
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
};

// --- Componente de Seção ---
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
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedBarbers, setSelectedBarbers] = useState<string[]>([]);
    const [selectedDateOption, setSelectedDateOption] = useState<string>('');
    const [priceRange, setPriceRange] = useState({ min: 20, max: 80 });

    const TOTAL_MIN_PRICE = 20;
    const TOTAL_MAX_PRICE = 80;

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const toggleBarber = (barber: string) => {
        setSelectedBarbers(prev =>
            prev.includes(barber)
                ? prev.filter(b => b !== barber)
                : [...prev, barber]
        );
    };

    const handleSelectDateOption = (option: string) => {
        setSelectedDateOption(option);
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

    const services = ["Corte", "Coloração", "Barba", "Corte + Barba", "Hidratação"];
    const barbers = ["Carlos Oliveira", "João Silva", "Pedro Souza"];
    const dateOptions = ["Hoje", "Últimos 7 dias", "Este mês"];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Filtro</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ServicePerformed')}>
                        <CloseIcon width={24} height={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.scrollView}>
                    <FilterSection title="Serviços">
                        <View style={styles.toggleContainer}>
                            {services.map(service => (
                                <ToggleButton
                                    key={service}
                                    label={service}
                                    isSelected={selectedServices.includes(service)}
                                    onPress={() => toggleService(service)}
                                />
                            ))}
                        </View>
                    </FilterSection>

                    <FilterSection title="Barbeiro">
                        <View style={styles.toggleContainer}>
                            {barbers.map(barber => (
                                <ToggleButton
                                    key={barber}
                                    label={barber}
                                    isSelected={selectedBarbers.includes(barber)}
                                    onPress={() => toggleBarber(barber)}
                                />
                            ))}
                        </View>
                    </FilterSection>

                    <FilterSection title="Data">
                        <View style={styles.toggleContainer}>
                            {dateOptions.map(option => (
                                <ToggleButton
                                    key={option}
                                    label={option}
                                    isSelected={selectedDateOption === option}
                                    onPress={() => handleSelectDateOption(option)}
                                />
                            ))}
                            <TouchableOpacity style={styles.dateInput}>
                                <Text style={styles.dateInputText}>dd/mm/aaaa</Text>
                                 {/* COLOQUE SEU ÍCONE DE CALENDÁRIO AQUI */}
                            </TouchableOpacity>
                        </View>
                    </FilterSection>

                    <FilterSection title="Preço">
                        <PriceRangeSlider
                            range={priceRange}
                            onRangeChange={setPriceRange}
                            totalMin={TOTAL_MIN_PRICE}
                            totalMax={TOTAL_MAX_PRICE}
                        />
                    </FilterSection>
                </ScrollView>

                <View style={styles.footer}>
                    <MainButton label="Aplicar filtros" onPress={handleApplyFilters} />
                </View>
            </View>
        </SafeAreaView>
    );
}
