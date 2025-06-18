import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CardContainer from '../CardContainer';
import ArrowDownIcon from '../../assets/icons/ic_setaParaBaixo.svg';

const PERIOD_OPTIONS = [ 'Últimos 7 dias', 'Hoje', 'Ontem', 'Esta Semana', 'Semana Passada', 'Este mês', 'Mês passado', 'Personalizar' ];

const getComissaoPorPeriodo = (periodo: string): string => {
  switch (periodo) {
    case 'Últimos 7 dias': return 'R$ 950,00';
    case 'Hoje': return 'R$ 130,50';
    default: return 'R$ 0,00';
  }
};

export const CardPeriodo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Últimos 7 dias');
  const [commissionValue, setCommissionValue] = useState('R$ 0,00');

  useEffect(() => {
    const newValue = getComissaoPorPeriodo(selectedPeriod);
    setCommissionValue(newValue);
  }, [selectedPeriod]);

  const handleSelectPeriod = (period: string) => {
    if (period !== 'Personalizar') setSelectedPeriod(period);
    setIsExpanded(false);
  };

  const renderDropdown = () => (
    <View style={styles.dropdownContainer}>
      {PERIOD_OPTIONS.map((item) => (
        <TouchableOpacity key={item} style={styles.optionButton} onPress={() => handleSelectPeriod(item)}>
          <Text style={styles.checkmark}>{selectedPeriod === item ? '✓' : ' '}</Text>
          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <CardContainer>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.periodSelector}>
          <View style={styles.periodSelectorInner}>
            <Text style={styles.periodText}>Período: {selectedPeriod}</Text>
            <View style={isExpanded ? styles.arrowIconExpanded : {}}>
              <ArrowDownIcon width={16} height={16} fill={"#555"} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.commissionContent}>
          <Text style={styles.commissionLabel}>Comissões Recebidas/período</Text>
          <Text style={styles.commissionValue}>{commissionValue}</Text>
        </View>
      </CardContainer>

      {isExpanded && renderDropdown()}
    </View>
  );
};
