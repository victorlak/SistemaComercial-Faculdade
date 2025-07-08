import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';
import CardContainer from '../CardContainer';
import ArrowDownIcon from '../../assets/icons/ic_setaParaBaixo.svg';

type Props = {
  selectorLabel: string;
  options: string[];
  initialSelectedOption: string;
  onSelect: (option: string) => void;
  icon: React.FC<SvgProps>;
  valueLabel: string;
  value: string;
  iconColor?: string;
};

export const CardSelector = ({
  selectorLabel,
  options,
  initialSelectedOption,
  onSelect,
  icon: Icon,
  valueLabel,
  value,
  iconColor = '#1C1C1E',
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(initialSelectedOption);

  const handleSelectOption = (option: string) => {
    setCurrentSelection(option);
    setIsExpanded(false);
    onSelect(option);
  };

  const renderDropdown = () => (
    <View style={styles.dropdownContainer}>
      {options.map((item) => (
        <TouchableOpacity 
          key={item} 
          style={styles.optionButton} 
          onPress={() => handleSelectOption(item)}
        >
          <Text style={styles.checkmark}>
            {currentSelection === item ? '✓' : ' '}
          </Text>
          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <CardContainer>
        <TouchableOpacity 
          onPress={() => setIsExpanded(!isExpanded)} 
          style={styles.periodSelector}
        >
          <View style={styles.periodSelectorInner}>
            <Text style={styles.periodText}>
              {selectorLabel}: {currentSelection}
            </Text>
            <View style={isExpanded ? styles.arrowIconExpanded : {}}>
              <ArrowDownIcon 
                width={16} 
                height={16} 
                fill="#555" 
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.commissionContent}>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <Text style={styles.commissionLabel}>{valueLabel}</Text>
            <Icon width={24} height={24} fill={iconColor} />
          </View>
          <Text style={styles.commissionValue}>{value}</Text>
        </View>
      </CardContainer>
      {isExpanded && renderDropdown()}
    </View>
  );
};