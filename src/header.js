import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#000',
  }
});

export default () => (
  <View style={styles.header} />
);
