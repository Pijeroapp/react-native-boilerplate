import * as React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';

import * as EN_USD_TRANSLATIONS from './translations/en-US.json';
import * as LT_LT_TRANSLATIONS from './translations/lt-LT.json';

import { HomeScreen } from './screens/Home.screen';
import { TodoListScreen } from './screens/TodoList.screen';
import { TodoFormScreen } from './screens/TodoForm.screen';
import { colors } from './styles';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  'en-US': EN_USD_TRANSLATIONS,
  'lt-LT': LT_LT_TRANSLATIONS,
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

i18n.fallbacks = true;

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case i18n.t('home', { defaultValue: 'Home' }):
                  return <Ionicons name={'home'} size={size} color={color} />;
                case i18n.t('todoList', { defaultValue: 'Todo list' }):
                  return <Ionicons name={'list'} size={size} color={color} />;
                case i18n.t('todoForm', { defaultValue: 'Todo form' }):
                  return <AntDesign name={'form'} size={size} color={color} />;
                default:
                  return (
                    <Ionicons name={undefined} size={size} color={color} />
                  );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.primary.default,
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen
            name={i18n.t('home', { defaultValue: 'Home' })}
            component={HomeScreen}
          />
          <Tab.Screen
            name={i18n.t('todoList', { defaultValue: 'Todo list' })}
            component={TodoListScreen}
          />
          <Tab.Screen
            name={i18n.t('todoForm', { defaultValue: 'Todo form' })}
            component={TodoFormScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
