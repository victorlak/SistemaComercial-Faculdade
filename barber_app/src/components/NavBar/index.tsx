import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';

// Imports dos ícones (híbrido: SVG e PNG)
import HomeIcon from '../../assets/icons/ic_home.svg';
import PerfilIcon from '../../assets/icons/ic_perfil.svg';
import EquipeIcon from '../../assets/icons/ic_equipe.svg';
import ServicosIcon from '../../assets/images/img_servicos.png';

interface NavItemProps {
  label: string;
  icon?: React.FC<any> | number;
  isActive?: boolean;
  onPress?: () => void;
}

interface BottomNavBarProps {
  tipoUser?: number;
}

const NavItem: React.FC<NavItemProps> = ({ 
  label, 
  icon,
  isActive = false, 
  onPress 
}) => {
  const activeColor = styles.activeText.color;
  const inactiveColor = styles.inactiveText.color;
  const iconColor = isActive ? activeColor : inactiveColor;

  return (
    // A MUDANÇA ESTÁ AQUI: Usamos um array de estilos.
    // O estilo 'active' é adicionado ao array somente se 'isActive' for verdadeiro.
    <TouchableOpacity 
      style={[styles.navItem, isActive && styles.active]}
      onPress={onPress}
    >
      {icon && (
        <>
          {typeof icon === 'number' ? (
            <Image 
              source={icon}
              style={[styles.icon, { tintColor: iconColor }]}
            />
          ) : (
            React.createElement(icon, {
              width: styles.icon.width,
              height: styles.icon.height,
              fill: iconColor,
            })
          )}
        </>
      )}
      
      <Text style={isActive ? styles.activeText : styles.inactiveText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export const NavBar: React.FC<BottomNavBarProps> = ({ tipoUser = 1 }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const items = [
    { label: 'Painel', icon: HomeIcon, routeName: 'Painel', onPress: () => navigation.navigate('Painel') },
    { label: 'Serviços', icon: ServicosIcon, routeName: 'Servicos', onPress: () => navigation.navigate('Servicos') },
    ...(tipoUser !== 2 ? [{ label: 'Equipe', icon: EquipeIcon, routeName: 'Equipe', onPress: () => navigation.navigate('Equipe') }] : []),
    { label: 'Perfil', icon: PerfilIcon, routeName: 'Perfil', onPress: () => navigation.navigate('Perfil') },
  ];

  return (
    // O container agora usa os novos estilos de rodapé com sombra
    <View style={styles.container}>
      {items.map((item, index) => (
        <NavItem
          key={index}
          label={item.label}
          icon={item.icon}
          isActive={route.name === item.routeName}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
};