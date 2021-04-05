import { StyleSheet } from 'react-native';

export const colors = {
  light: '#fff',
  dark: '#111',
  primary: { default: '#7498F5', light: '#A5BDFA', dark: '#4274F3' },
  gray: 'gray',
};

export const styles = StyleSheet.create({
  containerCentered: {
    backgroundColor: colors.light,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
