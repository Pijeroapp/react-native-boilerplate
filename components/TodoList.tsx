import * as React from 'react';
import { Text } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import i18n from 'i18n-js';

import { removeTodo } from '../api/mutations/todo.mutation';
import { getTodos } from '../api/queries/todos.query';
import { Todo } from '../models';

const TodoList = () => {
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
    return <Text>{i18n.t('loading')}</Text>;
  }

  if (status === 'error') {
    return <Text>{error?.message}</Text>;
  }

  if (data) {
    return (
      <>
        <Text>{i18n.t('todoList')}:</Text>
        {data?.map((todo: Todo) => (
          <Text key={todo.id} onPress={() => handleClick(todo)}>
            {todo.title}
          </Text>
        ))}
      </>
    );
  }
  return null;
};

export default TodoList;
