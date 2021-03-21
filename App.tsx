import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const test = { val1: 'hello', val2: 'hello', val3: 'hello' };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar />
    </View>
  );
}

const color = '#fff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
