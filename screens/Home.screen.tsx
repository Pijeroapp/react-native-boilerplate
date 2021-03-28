import * as React from 'react';
import { Button, View } from 'react-native';
import { styles } from '../styles';

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.containerCentered}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
};
