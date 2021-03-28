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
import { SCREEN } from './constants';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  'en-US': EN_USD_TRANSLATIONS,
  'lt-LT': LT_LT_TRANSLATIONS,
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

i18n.fallbacks = true;

const queryClient = new QueryClient();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={SCREEN.ROUTES.HOME}>
          <Drawer.Screen name={SCREEN.ROUTES.HOME} component={HomeScreen} />
          <Drawer.Screen
            name={SCREEN.ROUTES.TODO_LIST}
            component={TodoListScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
