import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { colors } from '../styles';

const ThemedContainer = ({
  children,
  testID,
}: {
  children: JSX.Element;
  testID?: string;
}) => {
  const theme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === 'light' ? colors.light : colors.dark,
      color: theme === 'light' ? colors.dark : colors.light,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View testID={testID} style={styles.container}>
      {children}
    </View>
  );
};

export default ThemedContainer;
