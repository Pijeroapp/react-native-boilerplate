import * as React from 'react';
import { View } from 'react-native';
import Form from '../components/Form';
import { styles } from '../styles';

export const TodoFormScreen = () => {
  return (
    <View style={styles.containerCentered}>
      <Form />
    </View>
  );
};
