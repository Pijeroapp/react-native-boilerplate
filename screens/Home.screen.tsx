import * as React from 'react';
import { Text, useColorScheme, StyleSheet } from 'react-native';
import i18n from 'i18n-js';

import { colors } from '../styles';
import ThemedContainer from '../components/ThemedContainer';

export const HomeScreen = () => {
  const theme = useColorScheme();

  const styles = StyleSheet.create({
    text: {
      color: theme === 'light' ? colors.dark : colors.light,
    },
  });

  return (
    <ThemedContainer>
      <Text style={styles.text}>
        {i18n.t('welcome', { defaultValue: 'Welcome' })}
      </Text>
    </ThemedContainer>
  );
};
