import * as React from 'react';
import { Text, View } from 'react-native';
import i18n from 'i18n-js';

import { styles } from '../styles';

export const HomeScreen = () => {
  return (
    <View style={styles.containerCentered} data-test="home-screen">
      <Text>{i18n.t('welcome', { defaultValue: 'Welcome' })}</Text>
    </View>
  );
};
