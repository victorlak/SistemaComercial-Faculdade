import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';

import HomeIcon from '../../assets/icons/ic_home.svg';
import PerfilIcon from '../../assets/icons/ic_perfil.svg';
import EquipeIcon from '../../assets/icons/ic_equipe.svg';
import ServicosIcon from '../../assets/images/img_servicos.png';
import { buscarLocalStorage } from '../../screens/Login/Storage';

const NavItem = ({ 
  label, 
  icon,
  isActive = false, 
  onPress 
}: any) => (
  <TouchableOpacity 
    style={[styles.navItem, isActive && styles.active]}
    onPress={onPress}
  >
    {icon && typeof icon === 'function' ? (
      React.createElement(icon, { width: 24, height: 24, style: styles.icon })
    ) : (
      icon && <Image source={icon} style={styles.icon} />
    )}
    <Text style={isActive ? styles.activeText : styles.inactiveText}>
      {label}
    </Text>
  </TouchableOpacity>
);

export const NavBar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [perfil, setPerfil] = useState<string | null>(null);

  useEffect(() => {
    async function obterPerfil() {
      const perfilSalvo = await buscarLocalStorage('perfil');
      setPerfil(perfilSalvo);
    }
    obterPerfil();
  }, []);

  const items = [
    { 
      label: 'Painel', 
      icon: HomeIcon, 
      routeName: 'Painel', 
      onPress: () => navigation.navigate('Painel') 
    },
    { 
      label: 'Serviços', 
      icon: ServicosIcon, 
      routeName: 'Servicos', 
      onPress: () => navigation.navigate('Servicos') 
    },
    ...(perfil === 'ADM' ? [{
      label: 'Equipe',
      icon: EquipeIcon,
      routeName: 'Equipe',
      onPress: () => navigation.navigate('Equipe')
    }] : []),
    { 
      label: 'Perfil', 
      icon: PerfilIcon, 
      routeName: 'Perfil', 
      onPress: () => navigation.navigate('Perfil') 
    },
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

export default NavBar;