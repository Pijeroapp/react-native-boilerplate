import * as React from 'react';
import ThemedContainer from '../components/ThemedContainer';

import TodoList from '../components/TodoList';

export const TodoListScreen = () => {
  return (
    <ThemedContainer testID="todo-list-screen">
      <TodoList />
    </ThemedContainer>
  );
};
