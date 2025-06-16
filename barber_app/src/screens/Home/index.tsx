import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { Logo } from './Logo';
import { NavBar } from '../../components/NavBar';

export default function Home() {
  return (
    <View style={styles.container}>
      <div>Home</div>
      {/* <Logo /> */}
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});