import * as React from 'react';
import { Text, useColorScheme, StyleSheet } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import i18n from 'i18n-js';

import { removeTodo } from '../api/mutations/todo.mutation';
import { getTodos } from '../api/queries/todos.query';
import { Todo } from '../models';
import { colors } from '../styles';

const TodoList = () => {
  const theme = useColorScheme();

  const styles = StyleSheet.create({
    text: {
      color: theme === 'light' ? colors.dark : colors.light,
    },
  });

  const queryClient = useQueryClient();

  const formMutation = useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleClick = (todo: Todo) => {
    formMutation.mutate(todo);
  };

  const { status, error, data } = useQuery<Todo, Error, Todo[]>(
    'todos',
    getTodos,
  );

  if (status === 'loading') {
    return <Text>{i18n.t('loading', { defaultValue: 'Loading' })}</Text>;
  }

  if (status === 'error') {
    return <Text>{error?.message}</Text>;
  }

  if (data) {
    return (
      <>
        <Text style={styles.text}>
          {i18n.t('todoList', { defaultValue: 'Todo list' })}:
        </Text>
        {data?.map((todo: Todo) => (
          <Text
            style={styles.text}
            key={todo.id}
            onPress={() => handleClick(todo)}
          >
            {todo.title}
          </Text>
        ))}
      </>
    );
  }
  return null;
};

export default TodoList;
