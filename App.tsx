import * as React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import * as EN_USD_TRANSLATIONS from './translations/en-US.json';
import * as LT_LT_TRANSLATIONS from './translations/lt-LT.json';

import { HomeScreen } from './screens/Home.screen';
import { TodoListScreen } from './screens/TodoList.screen';
import { TodoFormScreen } from './screens/TodoForm.screen';
import { Button, View } from 'react-native';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  'en-US': EN_USD_TRANSLATIONS,
  'lt-LT': LT_LT_TRANSLATIONS,
  'en-LT': EN_USD_TRANSLATIONS,
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

i18n.fallbacks = true;

const queryClient = new QueryClient();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName={i18n.t('home')}>
            <Drawer.Screen name={i18n.t('home')} component={HomeScreen} />
            <Drawer.Screen
              name={i18n.t('todoList')}
              component={TodoListScreen}
            />
            <Drawer.Screen
              name={i18n.t('todoForm')}
              component={TodoFormScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </View>
  );
}
