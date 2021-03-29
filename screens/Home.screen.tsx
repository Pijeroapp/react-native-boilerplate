import * as React from 'react';
import { Text, View } from 'react-native';
import i18n from 'i18n-js';

import { styles } from '../styles';

export const HomeScreen = () => {
  return (
    <View style={styles.containerCentered}>
      <Text>{i18n.t('welcome')}</Text>
    </View>
  );
};
