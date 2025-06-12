import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { Logo } from './Logo';
import { NavBar } from '../../components/NavBar';

export default function Service() {
  return (
    <View style={styles.container}>
      <div>Service</div>
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