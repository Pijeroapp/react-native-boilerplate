import * as React from 'react';
import { View } from 'react-native';

import TodoList from '../components/TodoList';
import { styles } from '../styles';

export const TodoListScreen = () => {
  return (
    <View style={styles.containerCentered} testID="todo-list-screen">
      <TodoList />
    </View>
  );
};
