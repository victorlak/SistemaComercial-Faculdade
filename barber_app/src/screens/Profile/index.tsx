import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
// import { Logo } from './Logo';
import { NavBar } from '../../components/NavBar';
import { styles } from './styles';
import ProfileImage from "../../components/ProfileImage"
import ProfileData from '../../components/ProfileData'
import ProfileSecurity from '../../components/ProfileSecurity'
import Logout from '../../components/Logout';

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>

        <ProfileImage/>

        <ProfileData/>

        <ProfileSecurity onChangePassword={function (): void {
          throw new Error('Function not implemented.');
        } } onSecuritySettings={function (): void {
          throw new Error('Function not implemented.');
        } }/>

        <Logout/>

        <NavBar/>
      </ScrollView>
    </SafeAreaView>
  );
}
