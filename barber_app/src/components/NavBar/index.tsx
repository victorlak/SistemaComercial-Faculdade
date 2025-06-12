import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';

// Importando os ícones
import HomeIcon from '../../assets/icons/ic_home.svg';
import PerfilIcon from '../../assets/icons/ic_perfil.svg';
import EquipeIcon from '../../assets/icons/ic_equipe.svg';
import ServicosIcon from '../../assets/images/img_servicos.png';

interface NavItemProps {
  label: string;
  icon?: any;
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
}) => (
  <TouchableOpacity 
    style={[styles.navItem, isActive && styles.active]}
    onPress={onPress}
  >
    {icon && <Image source={icon} style={styles.icon} />}
    <Text style={isActive ? styles.activeText : styles.inactiveText}>
      {label}
    </Text>
  </TouchableOpacity>
);

export const NavBar: React.FC<BottomNavBarProps> = ({ tipoUser = 1 }) => {
  const navigation = useNavigation();
  const route = useRoute();

  // Mapeia o nome da rota para o label do botão
  const routeToLabel: { [key: string]: string } = {
    Painel: 'Painel',
    Servicos: 'Serviços',
    Equipe: 'Equipe',
    Perfil: 'Perfil'
  };

  // Define as abas conforme tipoUser
  const items = [
    { label: 'Painel', icon: HomeIcon, routeName: 'Painel', onPress: () => navigation.navigate('Painel') },
    { label: 'Serviços', icon: ServicosIcon, routeName: 'Servicos', onPress: () => navigation.navigate('Servicos') },
    ...(tipoUser !== 2 ? [{ label: 'Equipe', icon: EquipeIcon, routeName: 'Equipe', onPress: () => navigation.navigate('Equipe') }] : []),
    { label: 'Perfil', icon: PerfilIcon, routeName: 'Perfil', onPress: () => navigation.navigate('Perfil') },
  ];

  return (
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
