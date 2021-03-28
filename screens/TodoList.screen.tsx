import * as React from 'react';
import { Text, View } from 'react-native';
import { QueryClient, useMutation, useQuery } from 'react-query';
import { removeTodo } from '../api/mutations/todo.mutation';
import { getTodos } from '../api/queries/todos.query';
import { Todo } from '../models';
import { styles } from '../styles';

const queryClient = new QueryClient();

const TodoList = () => {
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
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return <Text>{error?.message}</Text>;
  }

  if (data) {
    return (
      <>
        <Text>list:</Text>
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

export const TodoListScreen = () => {
  return (
    <View style={styles.containerCentered}>
      <TodoList />
    </View>
  );
};
